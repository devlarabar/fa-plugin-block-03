<?php

/**
 * Plugin Name: FemArt Custom Block - 03
 * Description: FemArt Custom Block - 03: Artist / Member Photo with Name and Link
 */

function femart_custom_block_03()
{
    register_block_type(__DIR__ . '/build');
}
add_action('init', 'femart_custom_block_03');
