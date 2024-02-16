<?php
require_once 'config/database.php';
$template = new Template();
$data = [
    'title' => 'Room',
    'slot' => $template->render('rooms',[])
];
$template->view("layout",$data);