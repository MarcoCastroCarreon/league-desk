import { gql } from "@apollo/client";

export const GET_ALL_CHAMPIONS = gql`
  query getAllChampions {
    getChamps {
      version
      id
      key
      name
      info {
        attack
        defense
        difficulty
        magic
      }
      title
      blurb
      tags
      partype
      stats {
        hp
        hpperlevel
        mp
        mpperlevel
        movespeed
        armor
        armorperlevel
        spellblock
        spellblockperlevel
        attackrange
        hpregen
        hpregenperlevel
        crit
        critperlevel
        attackdamage
        attackdamageperlevel
        attackspeedperlevel
        attackspeed
      }
    }
  }
`;
