// main game settings
const canvas_size = { width: 800, height: 600 };
const bg_color = 0;

// player settings
const player_speed = 15;
const player_width = 75;
const player_height = 15;
const player_color = "red";
const player_bullet_cooldown = 200;
const player_acceleration = 0.5;
const player_deceleration = 0.5;

// bullet settings
const bullet_width = 5;
const bullet_height = 20;
const bullet_color = "white";
const bullet_speed = 10;

// bullet manager objet pool    settings
const bullet_pool_size = 100;
const bullet_starting_position = { x: -100, y: -100 };

// enemy settings
const enemy_width = 25;
const enemy_height = 25;
const enemy_color = "green";
const enemy_speed = 1;
const enemy_points = 10;
const enemy_starting_position = { x: -100, y: -100 };

// enemy manager object pool settings
const enemy_pool_size = 100;
const enemies_origin = { x: 100, y: 50 };
const enemies_x_spacing_correction = 200; 
const enemy_rows = 5;
const enemy_columns = 11;
