<?php
/**
 * api/order.php
 * Returns a list of all orders formatted for the UI.
 * Creator: Abdullah Musani
 */

require_once __DIR__ . '/db.php';
header('Content-Type: application/json');

try {
    $pdo = getDB();

    $stmt = $pdo->prepare(
        "SELECT d.order_id,
                d.customer_email,
                d.est_prep_time,
                d.order_status,
                d.total_price,
                d.created_at,
                GROUP_CONCAT(CONCAT(p.name, ' x', oi.quantity) ORDER BY p.name SEPARATOR ', ') AS items
         FROM delivery d
         LEFT JOIN order_items oi ON oi.order_id = d.order_id
         LEFT JOIN products p ON p.product_id = oi.product_id
         GROUP BY d.order_id, d.customer_email, d.est_prep_time, d.order_status, d.total_price, d.created_at
         ORDER BY d.created_at DESC"
    );

    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($rows as &$row) {
        $row['order_id'] = (int) $row['order_id'];
        $row['total_price'] = (float) $row['total_price'];
        $row['items'] = $row['items'] ?? '';
    }

    echo json_encode([
        'status' => 'success',
        'orders' => $rows
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Database error: ' . $e->getMessage()
    ]);
}
