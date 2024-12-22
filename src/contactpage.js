import mapImage from './assets/images/fujimap.png';

function renderContactPage() {
  console.log('contactpage called')


  const contactPage = document.createElement('div');
  contactPage.id = 'contact-page';

  const heading = document.createElement('h1');
  heading.textContent = 'Contact';
  
  contactPage.appendChild(heading);

  // Content outer container div
  const container = document.createElement('div');
  
  // Location image div
  const locationImageDiv = document.createElement('div');
  locationImageDiv.id = 'location-image';
  const locationImage = document.createElement('img');
  locationImage.src = `${mapImage}`;
  locationImage.alt = 'map of our location on mount fuji';
  locationImageDiv.appendChild(locationImage);

  // Contact copy div
  const contactCopyDiv = document.createElement('div');
  contactCopyDiv.id = 'contact-copy';

  const table = document.createElement('table');
  const contactData = [
    { th: 'Opening hours', td: 'Monday to Sunday, 12pm-12am' },
    { th: 'Address', td: 'Sushi street, Sushi town, Sushi county. SU5 H11' },
    { th: 'Telephone', td: '01234 567 890' },
    { th: 'Email', td: 'soshi@sushi.com' },
  ];

  contactData.forEach((row) => {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    th.textContent = row.th;
    const td = document.createElement('td');
    td.textContent = row.td;
    tr.appendChild(th);
    tr.appendChild(td);
    table.appendChild(tr);
  });

  contactCopyDiv.appendChild(table);

  // Append content to container
  container.appendChild(locationImageDiv);
  container.appendChild(contactCopyDiv);
  // Append container to contact-page
  contactPage.appendChild(container);
  // Append contact-page to content div
  document.getElementById('content').appendChild(contactPage);
};

export default renderContactPage
