<?php
class Template
{
    public function view($view, $data)
    {
        extract($data);
        include 'app/views/' . $view . '.php';
    }
    public function render($view, $data)
    {
        ob_start();
        extract($data);
        include 'app/views/blocks/' . $view . '.php';
        return ob_get_clean();
    }
}