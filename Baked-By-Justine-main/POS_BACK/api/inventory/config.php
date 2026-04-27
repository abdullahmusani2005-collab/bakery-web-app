<?php
$config = [
    "db_url" => getenv("DB_HOST") ?: "localhost",
    "db_name" => getenv("DB_NAME") ?: "baked_by_justine",
    "db_user" => getenv("DB_USER") ?: "root",
    "db_pass" => getenv("DB_PASS") ?: "",
    "img_path" => "server/",
    "remoteURL" => "server/"
];

function createPDO(){
try {
  global $config;
  $dbh = new PDO("mysql:host={$config["db_url"]};dbname={$config["db_name"]}", "{$config["db_user"]}", "{$config["db_pass"]}");
  return $dbh;
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "Error:" . $e->getMessage()]);
    exit;
  }
}
?>
