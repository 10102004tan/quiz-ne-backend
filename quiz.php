<?php
require_once 'config/database.php';
$template = new Template();
$data = [
    'title' => 'Quiz',
    'slot' => $template->render('quiz',[])
];
$template->view("layout",$data);