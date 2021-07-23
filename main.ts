namespace SpriteKind {
    export const Obstacle = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Obstacle, function (sprite, otherSprite) {
    game.over(false, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, bunny)
    if (bunny.ay == 0) {
        bunny.setImage(img`
            . . . . . . . . . . . . 
            . . . 1 1 . 1 1 . . . . 
            . . . 1 3 . 1 3 . . . . 
            . . . . 1 3 . 1 3 . . . 
            . . . . 1 3 . 1 3 . . . 
            . . . 1 1 1 1 1 1 . . . 
            . . 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 f 1 1 f 1 . . 
            . . 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 f f 1 1 . . 
            . . . 1 1 1 1 1 1 . . . 
            . 1 1 1 1 1 1 1 1 1 1 . 
            . 1 1 1 1 1 1 1 1 1 1 . 
            . . . . 1 1 1 1 . . . . 
            . . . . 1 1 1 1 . . . . 
            . . . . 1 1 1 1 . . . . 
            . . . . 1 1 1 1 . . . . 
            . . . . . 1 1 . . . . . 
            . . . . . . 1 . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            `)
        bunny.vy = -160
        bunny.ay = gravity
    }
})
sprites.onDestroyed(SpriteKind.Obstacle, function (sprite) {
    info.changeScoreBy(1)
})
function createCloud () {
    cloud = sprites.createProjectileFromSide(clouds[randint(0, clouds.length - 1)], -30, 0)
    cloud.bottom = randint(30, 55)
    cloud.z = -2
}
function setupFrames () {
    birdFrames = [
    img`
        . . . . . . . . . . . . 
        . . . . . 1 1 1 1 . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 . . . . . 
        . . . . 1 1 1 . . . . . 
        . . . . 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . 1 1 1 1 . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 . . . . . 
        . . . . 1 1 1 . . . . . 
        . . . . 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `
    ]
    animation.runImageAnimation(
    bird,
    birdFrames,
    40,
    true
    )
    bunnyFrames = [
    img`
        . . . . . . . . . . . . 
        . . . . . . . d . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . d . . . 
        . . . 1 1 . 1 1 . . . . 
        . . . 1 3 . 1 3 . . . . 
        . . . 1 3 . 1 3 . . . . 
        . . . 1 3 . 1 3 . . . . 
        . . . 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 f 1 1 f 1 . . 
        . . 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 f f 1 1 . . 
        . . . 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 . 1 1 1 1 . 1 1 . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 . . 1 . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . 1 1 . 1 1 . . . . 
        . . . 1 3 . 1 3 . . . . 
        . . . . 1 3 . 1 3 . . . 
        . . . . 1 3 . 1 3 . . . 
        . . . 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 f 1 1 f 1 . . 
        . . 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 f f 1 1 . . 
        . . . 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 . 1 1 1 1 . 1 1 . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 . . 1 . . . . 
        . . . . . . . 1 . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . 1 1 . 1 1 . . . . 
        . . . 1 3 . 1 3 . . . . 
        . . . . 1 3 . 1 3 . . . 
        . . . . 1 3 . 1 3 . . . 
        . . . 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 f 1 1 f 1 . . 
        . . 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 f f 1 1 . . 
        . . . 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . . 1 1 . . . . . 
        . . . . . . 1 . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . 1 1 . 1 1 . . . . 
        . . . 1 3 . 1 3 . . . . 
        . . . . 1 3 . 1 3 . . . 
        . . . . 1 3 . 1 3 . . . 
        . . . 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 f 1 1 f 1 . . 
        . . 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 f f 1 1 . . 
        . . . 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . . 1 1 . . . . . 
        . . . . . 1 . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . 1 1 . 1 1 . . . 
        . . . . 1 3 . 1 3 . . . 
        . . . . 1 3 . 1 3 . . . 
        . . . . 1 3 . 1 3 . . . 
        . . . 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 f 1 1 f 1 . . 
        . . 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 f f 1 1 . . 
        . . . 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 . . 1 . . . . 
        . . . . 1 . . . . . . . 
        . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . 1 1 . 1 1 . . . 
        . . . . 1 3 . 1 3 . . . 
        . . . . 1 3 . 1 3 . . . 
        . . . . 1 3 . 1 3 . . . 
        . . . 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 f 1 1 f 1 . . 
        . . 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 f f 1 1 . . 
        . . . 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 . . 1 . . . . 
        . . . . . . . . . . . . 
        `
    ]
    obstacles = [
    img`
        ......................
        ..........7...........
        ..........77..........
        .........677..........
        ........66777.........
        ........66777.........
        ........667777........
        .......6677777........
        ......66677777........
        ........66666.........
        ........6666..........
        .......6666677........
        ......666777777.......
        ......6667777777......
        ......66777777777.....
        ..66666777777777777...
        ...666667777766666....
        ........666677........
        ........666777........
        ......667777777.......
        ...66677777777777.....
        666677777777777777....
        6667777777777777777776
        ...666666777777777776.
        .....6666eeee77777666.
        .........eeee.........
        .........eeee.........
        .........eeee.........
        .......6.eeee..6......
        ...666...eeee.6.......
        ...6.6...eeee.........
        ......................
        `,
    img`
        ...................................
        ..........7........................
        ..........77.......................
        .........677.......................
        ........66777......................
        ........66777......................
        ........667777.....................
        .......6677777.....................
        ......66677777.....................
        ........66666......................
        ........6666.......................
        .......6666677.....................
        ......666777777....................
        ......6667777777...................
        ......66777777777..................
        ..66666777777777777................
        ...666667777766666.................
        ........666677.....................
        ........666777...........eeeee.....
        ......667777777.........eebbbee....
        ...66677777777777......eebeeebee...
        666677777777777777.....eebeebbee...
        6667777777777777777776..eebbeee....
        ...666666777777777776..ebeeeebbe...
        .....6666eeee77777666..eebbbbeee..e
        .........eeee..........eeeeeeee..e.
        .........eeee..........ebeebebe.e.e
        .........eeee..........ebeeeebee...
        .......6.eeee..6.......eeebeeee....
        ...666...eeee.6.......eebebebeee...
        ...6.6...eeee........eeeeeeeeeeee..
        ..........................ee.......
        `,
    img`
        ......................................
        ..........................7...........
        ..........................77..........
        .........................677..........
        ........................66777.........
        ........................66777.........
        ........................667777........
        .......................6677777........
        ......................66677777........
        ........................66666.........
        ........................6666..........
        .......................6666677........
        ......................666777777.......
        ......................6667777777......
        ......................66777777777.....
        ..................66666777777777777...
        ...................666667777766666....
        ........................666677........
        .....eeeee..............666777........
        ....eebbbee...........667777777.......
        ...eebeeebee.......66677777777777.....
        ...eebeebbee....666677777777777777....
        ....eebbeee.....6667777777777777777776
        ...ebeeeebbe.......666666777777777776.
        ...eebbbbeee..e......6666eeee77777666.
        ...eeeeeeee..e...........eeee.........
        ...ebeebebe.e.e..........eeee.........
        ...ebeeeebee.............eeee.........
        ...eeebeeee............6.eeee..6......
        ..eebebebeee.......666...eeee.6.......
        .eeeeeeeeeeee......6.6...eeee.........
        ......ee..............................
        `,
    img`
        ....................................................
        ..........................7.........................
        ..........................77........................
        .........................677........................
        ........................66777.......................
        ........................66777.......................
        ........................667777......................
        .......................6677777......................
        ......................66677777......................
        ........................66666.......................
        ........................6666........................
        .......................6666677......................
        ......................666777777.....................
        ......................6667777777....................
        ......................66777777777...................
        ..................66666777777777777.................
        ...................666667777766666..................
        ........................666677......................
        .....eeeee..............666777............eeeee.....
        ....eebbbee...........667777777..........eebbbee....
        ...eebeeebee.......66677777777777.......eebeeebee...
        ...eebeebbee....666677777777777777......eebeebbee...
        ....eebbeee.....6667777777777777777776...eebbeee....
        ...ebeeeeb.e.......666666777777777776...ebeeeebbe...
        ...eebbbbeee..e......6666eeee77777666...eebbbbeee..e
        ...eeeeeeee..e...........eeee...........eeeeeeee..e.
        ...ebeebebe.e.e..........eeee...........ebeebebe.e.e
        ...ebeeeebee.............eeee...........ebeeeebee...
        ...eeebeeee............6.eeee..6........eeebeeee....
        ..eebebebeee.......666...eeee.6........eebebebeee...
        .eeeeeeeeeeee......6.6...eeee.........eeeeeeeeeeee..
        ......ee...................................ee.......
        `,
    img`
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        ...............
        .....eeeee.....
        ....eebbbee....
        ...eebeeebee...
        ...eebeebbee...
        ....eebbeee....
        ...ebeeeebbe...
        ...eebbbbeee..e
        ...eeeeeeee..e.
        ...ebeebebe.e.e
        ...ebeeeebee...
        ...eeebeeee....
        ..eebebebeee...
        .eeeeeeeeeeee..
        ......ee.......
        `,
    img`
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        .....eeeee.........eeeee.....
        ....eebbbee.......eebbbee....
        ...eebeeebee.....eebeeebee...
        ...eebeebbee.....eebeebbee...
        ....eebbeee.......eebbeee....
        ...ebeeeebbe.....ebeeeebbe...
        ...eebbbbeee..e..eebbbbeee..e
        ...eeeeeeee..e...eeeeeeee..e.
        ...ebeebebe.e.e..ebeebebe.e.e
        ...ebeeeebee.....ebeeeebee...
        ...eeebeeee......eeebeeee....
        ..eebebebeee....eebebebeee...
        .eeeeeeeeeeee..eeeeeeeeeeee..
        ......ee............ee.......
        `,
    img`
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        ...........................................
        .....eeeee.........eeeee.........eeeee.....
        ....eebbbee.......eebbbee.......eebbbee....
        ...eebeeebee.....eebeeebee.....eebeeebee...
        ...eebeebbee.....eebeebbee.....eebeebbee...
        ....eebbeee.......eebbeee.......eebbeee....
        ...ebeeeebbe.....ebeeeebbe.....ebeeeebbe...
        ...eebbbbeee..e..eebbbbeee..e..eebbbbeee..e
        ...eeeeeeee..e...eeeeeeee..e...eeeeeeee..e.
        ...ebeebebe.e.e..ebeebebe.e.e..ebeebebe.e.e
        ...ebeeeebee.....ebeeeebee.....ebeeeebee...
        ...eeebeeee......eeebeeee......eeebeeee....
        ..eebebebeee....eebebebeee....eebebebeee...
        .eeeeeeeeeeee..eeeeeeeeeeee..eeeeeeeeeeee..
        ......ee............ee............ee.......
        `
    ]
    animation.runImageAnimation(
    bunny,
    bunnyFrames,
    50,
    true
    )
    trees = [img`
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ...................b................
        ...................b................
        ...................b................
        ..................bbb...............
        ..................bb................
        .................bbbb...............
        ................bbbbbb..............
        ..................bb................
        .................bbbb...............
        ................bbbbbb..............
        ...............bbbbbbbb.............
        ..............bb..bbbbbb............
        .................bbbb..bbb..........
        ..................bb................
        .................bbbb...............
        ................bbbbbb..............
        ...............bbbbb.bb.............
        ..............bbbbbbbbbb............
        ............bbbb.bbbbbbb............
        ..........bbbbb..bbbbb.bbbb.........
        ................bbbbbb...bbb........
        ...............bbbbbbbb.............
        ..............bbbbbb.bb.............
        ...........bbbbbbbbbbbbb............
        .........bbbbbb..bbbb.bbb...........
        ..........bbbbb..bbbb...............
        ................bbbbbbb.............
        ...............bbbbbbbbb............
        .............bbbbbbbbb..............
        ...........bbbbbbbbbbbbbbbbb........
        ..........bbbbbbbbbbbbbbbbb.........
        .........bbbb.bbbbbbbb..............
        ........bb....bbbbbbbbb.............
        ............bbbbbbbbbbbbb...........
        ........bbbbbbbbbbbbbbbbbbbb........
        .......bbbbbbbbbbbbbbbbbbbbbbb......
        ......bbbbbbbb...bbbbbbbbb..........
        ..................bbb...............
        ..................bbb...............
        ..................bbb...............
        `, img`
        ...................b................
        ...................b................
        ...................b................
        ..................bbb...............
        .................bbbbbb.............
        ..................bb................
        ...................bbbb.............
        .................bbbbbbb............
        ...............bbb.b................
        ..................bbb...............
        ...............bbbbbbb..............
        ................bbbbbbbb............
        ..................bb.bbbb...........
        ..................bbb...............
        .................bbbbbb.............
        .............bbbbbbb.bbbb...........
        ............bbbbb.bbb...............
        ..................bbb...............
        .................bbbbb..............
        ..............bbbbbbbb..............
        .............bbbbbbbbbb.............
        ............bbb..bbbbbbbb...........
        ...........bbbb.bbbbbbbb.b..........
        ............b...bbbbbbbbb...........
        ...............bbbbbbbbbbb..........
        ..............bbbbbbb.bbbb..........
        .............bbbbbbbbbbbbbbb........
        ...........bbbb.bbbbbbb.............
        ...............bbbbbb.bb............
        .............bbbbbbbbbbbb...........
        ............bbbbbbbbbbbbbb..........
        ............bbbbbbbbbb..bbb.........
        .........bbbbbbbbbbbbbb..bbbb.......
        ........bb...bbbbbbbbb..............
        ..............bbbbbbbbbbb...........
        ............bbbb.bbbbbbbb...........
        ........bbbb.b...bbbbbbb............
        ................bbbbb..bbbb.........
        .............bbbbb.bbbbbbbb.........
        .........bbbbbb..bbbb..bbbbb........
        ........bb.b....bbbbb.....bbb.......
        ................bbbbb...............
        ..................bbb...............
        ..................bbb...............
        ..................bbb...............
        ..................bbb...............
        ..................bbb...............
        ..................bbb...............
        `, img`
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ...................b................
        ...................b................
        ...................b................
        ...................b................
        ..................bb................
        ..................bbb...............
        .................bbbb...............
        ...............bbbbb................
        ..................bb................
        .................bbbb...............
        .................bbbb...............
        .................bbbbb..............
        ................bbbbbbb.............
        ..............bbbbbbbbbb............
        ............bbbb..bbbbbbb...........
        .................bbbb...............
        .................bbbb...............
        ................bbbbbb..............
        ................bbbbbb..............
        ...............bbbbbbbb.............
        ............bbbbbbbbbbbbb...........
        ........bbbbbbbbbbbbbbbbbbbb........
        ...........bbbbbbbbbbbbbbbb.........
        ................bbbbbbb.b...........
        ..............bbbbbbbbbbbbbbbb......
        ...........bbbbbbbbbbbbbbbbbb.......
        ........bbbbbbbbbbbbbbbbbbb.........
        ..........bbbbb...bbbb..............
        ..................bbb...............
        ..................b.b...............
        ..................b.b...............
        ..................bbb...............
        ..................bbb...............
        `]
    grassImages = [
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . b . . . 
        . . . . b . . . 
        . . . b b . . . 
        . . . b b . . . 
        `,
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . b . . . . 
        . . . b . . . . 
        . . . b b . b . 
        . . . b b . b . 
        `,
    img`
        . . . . . . . . 
        . . . . . . . . 
        b . . . . . . . 
        b . . b . . . . 
        b . . b b . . . 
        b . b b b . . . 
        b . b b b . b . 
        b b b b b . b . 
        `,
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . b 
        . . . b . . . b 
        . . . b . . . b 
        . . . b b . b b 
        . . . b b . b b 
        `,
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . b . . . . 
        . . . b . . . . 
        . . b b . . . . 
        . . b b b . . . 
        . . b b b . . . 
        . . b b b . . . 
        `,
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . b . . . . . . 
        . b . . . . . . 
        . b b . . . b . 
        . b b . . . b . 
        . b b . . . b . 
        `
    ]
    clouds = [img`
        ............................11.....................
        .........................1111111...................
        ........................111111111111...............
        .......................11111111111111..............
        ......................1111111111111111.............
        .....................11111111111111111.............
        ..................111111111111111111111............
        ...............1111111111111111111111111...........
        ..........1111111111111111111111111111111..........
        .........111111111111111111111111111111111.........
        ........111111111111111111111111111111111111.......
        .......111111111111111111111111111111111111111.....
        .......1111111111111111111111111111111111111111....
        .......11111111111111111111111111111111111111111...
        .......111111111111111111111111111111111111111111..
        ......1111111111111111111111111111111111111111111..
        ....111111111111111111111111111111111111111111111..
        ...11111111111111111111111111111111111111111111111.
        ..111111111111111111111111111111111111111111111111.
        .11111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111.
        .....1111111111111111111111111111111111111111......
        `, img`
        .........................11111................
        ........................1111111...............
        ......................1111111111..............
        ..................111111111111111.............
        ...............111111111111111111.............
        ..............1111111111111111111111111.......
        .............111111111111111111111111111......
        .............111111111111111111111111111......
        .............1111111111111111111111111111.....
        ............11111111111111111111111111111.....
        ............111111111111111111111111111111....
        ............111111111111111111111111111111....
        ...........11111111111111111111111111111111...
        ......11111111111111111111111111111111111111..
        .....1111111111111111111111111111111111111111.
        ....11111111111111111111111111111111111111111.
        ...1111111111111111111111111111111111111111111
        ...1111111111111111111111111111111111111111111
        ...1111111111111111111111111111111111111111111
        ...1111111111111111111111111111111111111111111
        ..11111111111111111111111111111111111111111111
        .111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111.
        11111111111111111..................111111111..
        `, img`
        ........11111111.................
        .......1111111111................
        ....11111111111111...............
        ...1111111111111111..............
        ..11111111111111111111111........
        ..111111111111111111111111.......
        .11111111111111111111111111......
        .111111111111111111111111111.....
        1111111111111111111111111111.....
        111111111111111111111111111111...
        .111111111111111111111111111111..
        .1111111111111111111111111111111.
        ..1111111111111111111111111111111
        .....1111111111111111111111111111
        ......111111111111111111111111...
        .................................
        `, img`
        ...................1111................................................
        ..................111111...............................................
        .................11111111111111........................................
        ................1111111111111111.......................................
        ..............1111111111111111111......................................
        ............1111111111111111111111.....................................
        ...........11111111111111111111111.....................................
        ..........111111111111111111111111.....................................
        ..........1111111111111111111111111......11111.........................
        .........11111111111111111111111111...111111111........................
        .........111111111111111111111111111111111111111.......................
        .......111111111111111111111111111111111111111111......................
        ......1111111111111111111111111111111111111111111111...................
        ....11111111111111111111111111111111111111111111111111.................
        ...1111111111111111111111111111111111111111111111111111................
        ...11111111111111111111111111111111111111111111111111111...............
        ..1111111111111111111111111111111111111111111111111111111..............
        ..1111111111111111111111111111111111111111111111111111111..............
        ..11111111111111111111111111111111111111111111111111111111.............
        ..111111111111111111111111111111111111111111111111111111111............
        ..11111111111111111111111111111111111111111111111111111111111..........
        ..1111111111111111111111111111111111111111111111111111111111111........
        ..111111111111111111111111111111111111111111111111111111111111111111...
        .11111111111111111111111111111111111111111111111111111111111111111111..
        1111111111111111111111111111111111111111111111111111111111111111111111.
        1111111111111111111111111111111111111111111111111111111111111111111111.
        11111111111111111111111111111111111111111111111111111111111111111111111
        .1111111111111111111111111111111111111111111111111111111111111111111111
        ..11111111111111111111111111111111111111111111111111111111111111111111.
        ...............1111111111111111111111111111111..........11111111.......
        `, img`
        ........................1111...........
        .................1111..111111..........
        ...............111111111111111.........
        .............111111111111111111........
        ............11111111111111111111.......
        .........111111111111111111111111......
        ........1111111111111111111111111......
        .......1111111111111111111111111111....
        ......111111111111111111111111111111...
        .....11111111111111111111111111111111..
        .....111111111111111111111111111111111.
        ....1111111111111111111111111111111111.
        ....11111111111111111111111111111111111
        ....11111111111111111111111111111111111
        ..1111111111111111111111111111111111111
        .1111111111111111111111111111111111111.
        1111111111111111111111111111111111111..
        111111111111111111.....................
        `]
}
function createTree () {
    tree = sprites.createProjectileFromSide(trees[randint(0, trees.length - 1)], -50, 0)
    tree.bottom = 100
    tree.z = -1
}
let grass: Sprite = null
let projectile: Sprite = null
let obstacleImage: Image = null
let tree: Sprite = null
let grassImages: Image[] = []
let trees: Image[] = []
let obstacles: Image[] = []
let bunnyFrames: Image[] = []
let birdFrames: Image[] = []
let clouds: Image[] = []
let cloud: Sprite = null
let bird: Sprite = null
let gravity = 0
let bunny: Sprite = null
scene.setBackgroundColor(13)
bunny = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
gravity = 400
bunny.ay = gravity
bunny.x = 20
bird = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
bird.setPosition(160, 20)
bird.setVelocity(-120, 0)
setupFrames()
game.onUpdate(function () {
    if (bird.x < 0) {
        bird.setPosition(randint(160, 240), randint(20, 60))
    }
})
game.onUpdate(function () {
    if (bunny.bottom > 105) {
        bunny.bottom = 105
        bunny.vy = 0
        bunny.ay = 0
        animation.runImageAnimation(
        bunny,
        bunnyFrames,
        50,
        true
        )
    }
})
game.onUpdateInterval(2000, function () {
    obstacleImage = obstacles[randint(0, obstacles.length - 1)]
    projectile = sprites.createProjectileFromSide(obstacleImage, -100, 0)
    projectile.bottom = 105
    projectile.setKind(SpriteKind.Obstacle)
})
game.onUpdateInterval(1000, function () {
    if (Math.percentChance(40)) {
        createCloud()
    }
})
forever(function () {
    if (Math.percentChance(60)) {
        createTree()
        if (Math.percentChance(50)) {
            pause(randint(150, 300))
            createTree()
        }
    }
    pause(1500)
})
game.onUpdateInterval(200, function () {
    if (Math.percentChance(40)) {
        grass = sprites.createProjectileFromSide(grassImages[randint(0, grassImages.length - 1)], -50, 0)
        grass.bottom = 100
        grass.z = -1
    }
})
