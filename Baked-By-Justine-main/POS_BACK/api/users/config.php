<?php
$config = [
    "db_url" => getenv("DB_HOST") ?: "localhost",
    "db_name" => getenv("DB_NAME") ?: "baked_by_justine",
    "db_user" => getenv("DB_USER") ?: "root",
    "db_pass" => getenv("DB_PASS") ?: "",
    "img_path" => "server/"
];
