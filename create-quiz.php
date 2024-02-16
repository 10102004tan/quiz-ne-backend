<?php
require_once 'config/database.php';
$template = new Template();
$data = [
    'title' => 'Create Quiz',
    'slot' => $template->render('create-quiz',[])
];
$template->view("layout",$data);