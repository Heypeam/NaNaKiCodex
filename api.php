<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SERVER['HTTP_X_REQUESTED_WITH'])) {
    $input = json_decode(file_get_contents('php://input'), true);
    $response = ['status' => 'ok', 'message' => 'ได้รับข้อความแล้ว ทีมงานจะติดต่อกลับ'];
    echo json_encode($response);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode([
        'service' => 'NaNaKi Codex API',
        'version' => '1.0',
        'status' => 'active',
        'developer' => 'NaNaKi Team'
    ]);
}
?>