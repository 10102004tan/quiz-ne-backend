<?php
require_once 'config/database.php';
$template = new Template();
$data = [
    'title' => 'Explore',
    'slot' => $template->render('explore',["sidebar" => $template->render('sidebar', [])])
];
$template->view("layout",$data);