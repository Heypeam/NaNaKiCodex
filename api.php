<?php
// backend.php (PHP แยกไฟล์ สาธิตการติดต่อ)
// ไฟล์นี้แสดงตัวอย่าง backend สำหรับส่งข้อมูลอีเมลหรือ API ไม่บังคับบนหน้าเว็บหลัก แต่เพื่อให้ครบตามที่โจทย์ต้องการ
// สามารถเพิ่ม endpoint หรือ รับฟอร์มติดต่อได้ในอนาคต

header('Content-Type: application/json; charset=utf-8');

// ตัวอย่าง API ง่าย ๆ สำหรับอนาคต เช่น ติดต่อทีม (ถ้ามีฟอร์ม)
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SERVER['HTTP_X_REQUESTED_WITH'])) {
    $input = json_decode(file_get_contents('php://input'), true);
    $response = ['status' => 'ok', 'message' => 'ได้รับข้อความแล้ว ทีมงานจะติดต่อกลับ'];
    echo json_encode($response);
    exit;
}

// ถ้าเข้าไฟล์นี้โดยตรงจะแสดงข้อมูลสถานะ backend พื้นฐาน
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode([
        'service' => 'NaNaKi Codex API',
        'version' => '1.0',
        'status' => 'active',
        'developer' => 'NaNaKi Team'
    ]);
}
?>