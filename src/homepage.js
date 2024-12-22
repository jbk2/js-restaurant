import sushiImage from './assets/images/sushi1.svg';
import swordImage from './assets/images/katanasword.svg';
import pet1Image from './assets/images/pet1.webp';
import pet2Image from './assets/images/pet2.jpg';
import pet3Image from './assets/images/pet3.webp';

function renderHomePage() {
  const contentDiv = document.getElementById('content')
  contentDiv.append(ingredientsSection(), chefSection(), reviewsSection());
}

const ingredientsSection = () => {
  let section = document.createElement('section');
  section.id = "ingredients-section";
  section.innerHTML = `
    <div>
      <h1>Fine quality, fresh ingredients</h1>
      <div class="content">
        <img id="sushi1-svg" src="${sushiImage}" alt="some sushi">
        <p>Best quality line caught sushi SVGs, from sustainable local designers.</p>
      </div>
    </div>
  `;
  return section;
};

const chefSection = () => {
  let section = document.createElement('section');
  section.id = "chef-section";
  section.innerHTML = `
    <div id="chef-header">
      <h1>Chef Banzai</h1>
      <img id="sword-svg" src="${swordImage}" alt="samurai sword">
    </div>
    <p>Trained under Japanese sushi masters, since the age of 5, and for 72 years, Chef Banzai Sarumaku
      knows well how to fillet a fish. True to his family's Samurai heritage his filleting
      method is by sword, often accompanied by his notorious shreiking of famous samurai battle cries.
    </p>
  `;
  return section;
};

const reviewsSection = () => {
  let section = document.createElement('section');
  section.id = "reviews-section";
  section.innerHTML = `
    <h1>Reviews</h1>
    <div id="reviews">
      <div id="review-1">
        <div class="image-mask">
          <img id="pet1" src="${pet1Image}" alt="aristocratic cat">
        </div>
        <p>
          <span>Millicent Houghton-Bogtrotter ('Boggie') - </span>
          "Marvelous, a dining experience quite unlike any other."
        </p>
      </div>
      <div id="review-2">
        <div class="image-mask">
          <img id="pet2" src="${pet2Image}" alt="aristocratic dog">
        </div>
        <p>
          <span>Cecil Chadwick-Smotherington ('Chadders') - </span>
          "Frightfully foreign stuff, one ought be accompanied by Primus."
        </p>
      </div>
      <div id="review-3">
        <div class="image-mask">
          <img id="pet3" src="${pet3Image}" alt="aristocratic labrador">
        </div>
        <p>
          <span>Humphrey Headingly-Snodsbottom ('Snodders') - </span>
          "Rather agreeable, though bracing, oriental grub. Import to Whites perhaps."
        </p>
      </div>
    </div>
  `;
  return section;
};

export { renderHomePage };