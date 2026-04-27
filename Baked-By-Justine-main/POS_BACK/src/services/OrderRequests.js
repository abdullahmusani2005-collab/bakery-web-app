import { showToast } from "../components/permissions.js";

/**
 * Name: Abdullah Musani
 * Date: April 20, 2026
 * Description: OrderRequest API Service
 */

const url = "api/inventory/orders.php";

export async function getOrders(start_date, end_date) {
  try {
    const response = await fetch(url + `?start_date=${encodeURIComponent(start_date)}&end_date=${encodeURIComponent(end_date)}`);
    if (!response.ok) throw new Error("Error loading active orders.");
    return await response.json();
  } catch (err) {
    throw new Error("Network failure: Cannot sync orders.");
  }
}

export async function updateOrder(orderId, status) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `orderId=${encodeURIComponent(orderId)}&status=${encodeURIComponent(status)}`
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.error) {
      showToast(data.error || `Failed to update order #${orderId}`, "error");
      throw new Error(data.error || "Order update failed.");
    }
    showToast(`Order #${orderId} marked as ${status}`, "success");
    return data;
  } catch (err) {
    throw new Error("Status update failed: Connection error.");
  }
}
