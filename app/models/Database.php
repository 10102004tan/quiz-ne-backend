<?php

class Database
{
    protected static $connection;

    public function __construct()
    {
        if (!self::$connection) {
            self::$connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
            self::$connection->set_charset(DB_CHARSET);
            if (self::$connection->connect_error) {
                die("Connection failed: " . self::$connection->connect_error);
            }
        }
    }

    public function select($sql) {
        $items = [];
        $sql->execute();
        $items = $sql->get_result()->fetch_all(MYSQLI_ASSOC);
        return $items;
}
}