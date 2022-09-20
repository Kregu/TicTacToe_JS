const play_field = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_']
]

function print_play_field(play_field){
    for (let i = 0; i < 3; i++){
        let str = '';
        for (let j = 0; j < 3; j++) {
            str = str + play_field[i][j];
        }
        console.log(str)
    }
}

function print_nav(){
    console.log('qwe\nasd\nzxc')
}

function get_player_move(){
    const readline = require('readline-sync');
    let move
    while (!values.includes(move)){
        move = readline.question("enter your move: ");
    }
    return move
}

function change_play_field(move, figure) {
    let [x, y] = coords[move]


        play_field[x][y] = figure

}

const values = ['q','w','e','a','s','d','z','x','c']

const coords = {
    q: [0, 0],
    w: [0, 1],
    e: [0, 2],
    a: [1, 0],
    s: [1, 1],
    d: [1, 2],
    z: [2, 0],
    x: [2, 1],
    c: [2, 2]
}

function player_X_move (){

    let move = get_player_move()

    while (check_collision(move)){
        move = get_player_move()
    }

    change_play_field(move, 'X')
}

function player_0_move (){
    let move = get_player_move()

    while (check_collision(move)){
        move = get_player_move()
    }

    change_play_field(move, '0')

}

function check_collision(move){
    let [x, y] = coords[move]
    if (play_field[x][y] == '_'){
        return false
    }
    return true
}

function is_game_over () {
    if (is_winner()){

    }
    if (is_tie()){
        console.log('Tie!')
    }
}

function is_winner (){
    for (let i = 0; i < 3; i++) {
        if (play_field[i].toString() === 'X,X,X'){
            console.log('X Winner!')
            return true
        }
        if (play_field[i].toString() === '0,0,0'){
            console.log('0 Winner!')
            return true
        }
    }

    for (let i = 0; i < 3; i++) {
        let str = ''
        for (let j = 0; j < 3; j++) {
            str = str + play_field[j][i]
        }
        if (str === 'XXX') {
            console.log('X Winner!')
            return true
        }
        if (str === '000') {
            console.log('0 Winner!')
            return true
        }
    }
    let str = ''
    for (let i = 0; i < 3; i++) {
        str = str + play_field[i][i]
    }

    if (str === 'XXX') {
        console.log('X Winner!')
        return true
    }
    if (str === '000') {
        console.log('0 Winner!')
        return true
    }

    str = ''
    for (let i = 0; i < 3; i++) {
        str = str + play_field[i][2-i]
    }

    if (str === 'XXX') {
        console.log('X Winner!')
        return true
    }
    if (str === '000') {
        console.log('0 Winner!')
        return true
    }

    return false
}

function is_tie(){
    for (let i = 0; i < 3; i++) {
        if (play_field[i].includes('_')){

            return false
        }
    }
    return true
}


function game_loop(){
    while (true){
        print_play_field(play_field)
        // print_nav()
        player_X_move()
        console.clear()
        if (is_game_over()) {
            break
        }

        print_play_field(play_field)
        player_0_move()
        console.clear()
        is_game_over()
    }
}


game_loop()
