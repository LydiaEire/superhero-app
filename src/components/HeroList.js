import React from 'react';
import HeroCard from './HeroCard';


const heroes = [
{
    name: 'Homelander',
    image: 'https://deadline.com/wp-content/uploads/2023/11/The-Boys-Homelander-e1720743363244.jpg',
    abilities: 'Super strength, flight, heat vision, enhanced durability',
    description: 'The leader of The Seven, Homelander is powerful and ruthless.',
},
{
    name: 'Queen Maeve',
    image: 'https://sm.ign.com/ign_br/screenshot/default/blob_2b4g.jpg',
    abilities: 'Super strength, agility, enhanced durability',
    description: 'A member of The Seven, Queen Maeve is incredibly skilled in combat.',
},
{
    name: 'Starlight',
    image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/09/starlight-the-boys.jpg',
    abilities: 'Light manipulation, super strength, durability',
    description: 'A newer member of The Seven, Starlight can manipulate light and energy.',
},
{
    name: 'Billy Butcher',
    image: 'https://staticg.sportskeeda.com/editor/2024/05/b4e89-17164144459909-1920.jpg?w=640',
    abilities: 'Exceptional hand-to-hand combatant, strategic mind, no superpowers',
    description: 'The leader of The Boys, Butcher has a vendetta against supes.',
},
{
    name: 'Hughie Campbell',
    image: 'https://assets1.ignimgs.com/2020/08/20/the-boys-season2-image027-1597940334536.jpg',
    abilities: 'Resourcefulness, determination, no superpowers',
    description: 'A member of The Boys, Hughie was pulled into the fight against The Seven after a personal tragedy.',
},
{
    name: 'Frenchie',
    image: 'https://comicbookclublive.com/wp-content/uploads/2024/07/tomer-capone-frenchie-the-boys-season-4-jpg.webp',
    abilities: 'Weapons expert, tactical skills, no superpowers',
    description: 'A member of The Boys, Frenchie is an expert in weapons and tactical operations.',
},
{
    name: 'Kimiko',
    image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/06/the-boys-karen-fukuhara.jpg',
    abilities: 'Super strength, enhanced agility, fast healing',
    description: 'A mysterious member of The Boys, Kimiko possesses superhuman abilities and a tragic past.',
},
];

function HeroList() {
return (
    <div className="hero-list">
    {heroes.map((hero) => (
        <HeroCard key={hero.name} hero={hero} />
    ))}
    </div>
);
}

export default HeroList;
