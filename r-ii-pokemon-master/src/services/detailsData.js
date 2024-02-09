import rocketTeamImage from '../images/rocket-team.png'
export const initialDetails = {
    name: "Team Rocket",
    id: 0,
      sprites: {
        other: {
          'dream_world': {
            'front_default': rocketTeamImage,
          },
        },
      },
    stats: [
    {
        "base_stat": 0,
        "stat": {
            "name": "hp",
        }
    },
    {
        "base_stat": 0,
        "stat": {
            "name": "attack",
        }
    },
    {
        "base_stat": 0,
        "stat": {
            "name": "defense",
        }
    },
    {
        "base_stat": 0,
        "stat": {
            "name": "special-attack",
        }
    },
    {
        "base_stat": 0,
        "stat": {
            "name": "special-defense",
        }
    },
    {
        "base_stat": 0,
        "stat": {
            "name": "speed",
        }
    }
],
"types": [
    {
        "type": {
            "name": "Rocket",
        }
    }
],
"weight": 1000
}