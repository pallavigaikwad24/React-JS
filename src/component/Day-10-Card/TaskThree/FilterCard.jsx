import {useState} from 'react';
import Card from './Card.jsx'

function FilterCard(){
    const [state, setState] = useState(
      [{
        "name": "Devondra Achrameev",
        "age": 36,
        "education": "PhD",
        "weight": 81,
        "gender": "Female",
        "city": "Solomenskoye",
        "salary": 7678
      }, {
        "name": "Fredi Ritchley",
        "age": 77,
        "education": "High School Diploma",
        "weight": 17,
        "gender": "Female",
        "city": "Açucena",
        "salary": 9667
      }, {
        "name": "Malchy Pilpovic",
        "age": 85,
        "education": "PhD",
        "weight": 57,
        "gender": "Male",
        "city": "Sedlice",
        "salary": 2965
      }, {
        "name": "Adham Price",
        "age": 51,
        "education": "PhD",
        "weight": 47,
        "gender": "Male",
        "city": "Raojān",
        "salary": 1846
      }, {
        "name": "Magdaia Atcheson",
        "age": 82,
        "education": "PhD",
        "weight": 66,
        "gender": "Female",
        "city": "Isulan",
        "salary": 1936
      }, {
        "name": "Davine Elkins",
        "age": 75,
        "education": "Master's Degree",
        "weight": 9,
        "gender": "Female",
        "city": "Kraków",
        "salary": 13958
      }, {
        "name": "Brigit Breach",
        "age": 65,
        "education": "Master's Degree",
        "weight": 89,
        "gender": "Female",
        "city": "Brudzew",
        "salary": 12271
      }, {
        "name": "Teodoor Abrahmson",
        "age": 7,
        "education": "Master's Degree",
        "weight": 88,
        "gender": "Male",
        "city": "Ermida",
        "salary": 2497
      }, {
        "name": "Aridatha Iorizzo",
        "age": 50,
        "education": "High School Diploma",
        "weight": 93,
        "gender": "Bigender",
        "city": "Santa Rosa del Sara",
        "salary": 1055
      }, {
        "name": "Anabal Bolley",
        "age": 88,
        "education": "Bachelor's Degree",
        "weight": 85,
        "gender": "Female",
        "city": "Thanatpin",
        "salary": 12389
      }, {
        "name": "Wilfred Housegoe",
        "age": 44,
        "education": "PhD",
        "weight": 30,
        "gender": "Male",
        "city": "Alabug",
        "salary": 7557
      }, {
        "name": "Keven Prier",
        "age": 9,
        "education": "Master's Degree",
        "weight": 89,
        "gender": "Male",
        "city": "Yuzhno-Sukhokumsk",
        "salary": 2300
      }, {
        "name": "Nicolais McGorley",
        "age": 24,
        "education": "Master's Degree",
        "weight": 38,
        "gender": "Male",
        "city": "Riyue",
        "salary": 5588
      }, {
        "name": "Rockey Enga",
        "age": 19,
        "education": "High School Diploma",
        "weight": 66,
        "gender": "Male",
        "city": "Vale de Touros",
        "salary": 7615
      }, {
        "name": "Walton Barnewille",
        "age": 21,
        "education": "PhD",
        "weight": 75,
        "gender": "Male",
        "city": "Kuala Lumpur",
        "salary": 7931
      }, {
        "name": "Lissie Leggon",
        "age": 61,
        "education": "High School Diploma",
        "weight": 25,
        "gender": "Female",
        "city": "Pechora",
        "salary": 1927
      }, {
        "name": "Celia Zanazzi",
        "age": 49,
        "education": "PhD",
        "weight": 62,
        "gender": "Female",
        "city": "Gansa",
        "salary": 7831
      }, {
        "name": "Vernice Farloe",
        "age": 46,
        "education": "Bachelor's Degree",
        "weight": 9,
        "gender": "Female",
        "city": "Puerto Francisco de Orellana",
        "salary": 9344
      }, {
        "name": "Adolph Southworth",
        "age": 29,
        "education": "High School Diploma",
        "weight": 87,
        "gender": "Polygender",
        "city": "Qixingtai",
        "salary": 2408
      }, {
        "name": "Gwenette Burberry",
        "age": 40,
        "education": "High School Diploma",
        "weight": 21,
        "gender": "Bigender",
        "city": "Lesichevo",
        "salary": 3949
      }, {
        "name": "Corabella Staten",
        "age": 59,
        "education": "Master's Degree",
        "weight": 21,
        "gender": "Female",
        "city": "Loughrea",
        "salary": 4085
      }, {
        "name": "Neilla Callery",
        "age": 80,
        "education": "Bachelor's Degree",
        "weight": 27,
        "gender": "Female",
        "city": "Arnhem",
        "salary": 297
      }, {
        "name": "Maris Stilliard",
        "age": 41,
        "education": "Master's Degree",
        "weight": 81,
        "gender": "Female",
        "city": "Kuching",
        "salary": 4622
      }, {
        "name": "Ayn Gallamore",
        "age": 12,
        "education": "PhD",
        "weight": 30,
        "gender": "Bigender",
        "city": "Sala",
        "salary": 1697
      }, {
        "name": "Tynan Roeby",
        "age": 18,
        "education": "PhD",
        "weight": 35,
        "gender": "Male",
        "city": "Tongyu",
        "salary": 8100
      }, {
        "name": "Arri Blyth",
        "age": 48,
        "education": "Master's Degree",
        "weight": 8,
        "gender": "Polygender",
        "city": "Emiliano Zapata",
        "salary": 5251
      }, {
        "name": "Robinetta Trevino",
        "age": 61,
        "education": "Master's Degree",
        "weight": 60,
        "gender": "Female",
        "city": "Ouro Preto",
        "salary": 4813
      }, {
        "name": "Piotr Clemence",
        "age": 17,
        "education": "High School Diploma",
        "weight": 42,
        "gender": "Genderfluid",
        "city": "Guinabsan",
        "salary": 11850
      }, {
        "name": "Julie Bern",
        "age": 57,
        "education": "Bachelor's Degree",
        "weight": 87,
        "gender": "Female",
        "city": "Bukama",
        "salary": 8243
      }, {
        "name": "Tish McCumskay",
        "age": 5,
        "education": "Master's Degree",
        "weight": 74,
        "gender": "Female",
        "city": "Cho-airong",
        "salary": 13340
      }, {
        "name": "Marlo Liles",
        "age": 82,
        "education": "Master's Degree",
        "weight": 22,
        "gender": "Female",
        "city": "Garawati",
        "salary": 12251
      }, {
        "name": "Tabbatha Jopke",
        "age": 16,
        "education": "Master's Degree",
        "weight": 60,
        "gender": "Female",
        "city": "Hubei",
        "salary": 8017
      }, {
        "name": "Lotte Ruslin",
        "age": 23,
        "education": "High School Diploma",
        "weight": 70,
        "gender": "Female",
        "city": "Uvarovo",
        "salary": 96
      }, {
        "name": "Herold Dwyer",
        "age": 85,
        "education": "Master's Degree",
        "weight": 35,
        "gender": "Male",
        "city": "Qarah Ẕīā’ od Dīn",
        "salary": 9544
      }, {
        "name": "Arthur Dawton",
        "age": 12,
        "education": "PhD",
        "weight": 99,
        "gender": "Male",
        "city": "Bugene",
        "salary": 11914
      }, {
        "name": "Yovonnda Airdrie",
        "age": 31,
        "education": "Bachelor's Degree",
        "weight": 31,
        "gender": "Female",
        "city": "Bor Tungge",
        "salary": 11914
      }, {
        "name": "Rickie Battisson",
        "age": 66,
        "education": "Bachelor's Degree",
        "weight": 8,
        "gender": "Female",
        "city": "Batanghari",
        "salary": 14046
      }, {
        "name": "Gerrie Doveston",
        "age": 8,
        "education": "PhD",
        "weight": 78,
        "gender": "Male",
        "city": "Isakly",
        "salary": 4584
      }, {
        "name": "Mickey Woolaston",
        "age": 18,
        "education": "PhD",
        "weight": 30,
        "gender": "Male",
        "city": "Zhongxin",
        "salary": 1469
      }, {
        "name": "Grissel Spinello",
        "age": 49,
        "education": "Master's Degree",
        "weight": 58,
        "gender": "Female",
        "city": "Hengtanggang",
        "salary": 13843
      }]
          
      )
    return(
        <>
          <Card state={state}/>
        </>
    )
}

export default FilterCard;