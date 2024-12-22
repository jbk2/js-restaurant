function renderMenuPage() {
  console.log('menupage called')
    // structure to hold the menu data
    const menuData = [
      {
        className: "1col",
        rows: [
          {
            title: "Sushinoen special bento",
            description: "Sashimi, Nigiri, Chirashi Don, Mixed Tempura, and side dishes with Miso soup",
            price: "23.95",
          },
          {
            title: "Salmon sashimi & sushi bento",
            description: "Salmon Sashimi (6pcs), Nigiri (5pcs) and Salmon Don with Miso soup",
            price: "21.95",
          },
        ],
      },
      {
        className: "2col",
        rows: [
          {
            title: "Black cod bento",
            description: "Miso-marinated grilled Black Cod",
            price: "25.95",
          },
          {
            title: "Chicken katsu bento",
            description: "Breaded deep-fried Chicken thigh with katsu sauce",
            price: "15.95",
          },
          {
            title: "Sabashioyaki bento",
            description: "Grilled Mackerel",
            price: "14.95",
          },
          {
            title: "Ton katsu bento (pork)",
            description: "Breaded deep-fried pork loin with katsu sauce",
            price: "15.95",
          },
          {
            title: "Salmon teriyaki bento",
            description: "Grilled Salmon cooked in teriyaki sauce",
            price: "16.95",
          },
          {
            title: "Mixed tempura bento",
            description: "Prawn & Vegetable tempura",
            price: "17.95",
          },
          {
            title: "Chicken teriyaki bento",
            description: "Grilled Chicken thigh cooked in teriyaki sauce",
            price: "15.95",
          },
          {
            title: "Vegetable tempura bento (v)",
            description: "Mixed Vegetable tempura",
            price: "16.95",
          },
          {
            title: "Beef teriyaki bento",
            description: "Grilled Sirloin Beef cooked in teriyaki sauce",
            price: "19.95",
          },
          {
            title: "Unagi bento",
            description: "Grilled Eel cooked in unagi sauce",
            price: "19.95",
          },
        ],
      },
    ];
  
    menuData.forEach((menuTable) => {
      const container = document.createElement("div");
      container.className = menuTable.className;

      const table = document.createElement("table");
  
      if (menuTable.className === "1col") {
        // 1col table (builds 1 menu item into one row)
        menuTable.rows.forEach((row) => {
          const tr = document.createElement("tr");
  
          // Title and description in 1 col
          const titleTd = document.createElement("td");
          titleTd.className = "title";
          titleTd.innerHTML = `
            ${row.title}
            <span class="description">${row.description}</span>
          `;
          tr.appendChild(titleTd);
  
          // Price in another col
          const priceTd = document.createElement("td");
          priceTd.className = "price";
          priceTd.textContent = row.price;
          tr.appendChild(priceTd);
  
          table.appendChild(tr);
        });
      } else if (menuTable.className === "2col") {
        // 2col table (builds 2 menu items into one row)
        for (let i = 0; i < menuTable.rows.length; i += 2) {
          const tr = document.createElement("tr");
  
          // 1st col: Menu item (if exists)
          const item1 = menuTable.rows[i];
          if (item1) {
            const td1 = document.createElement("td");
            td1.className = "title";
            td1.innerHTML = `
              ${item1.title}
              <span class="description">${item1.description}</span>
            `;
            const price1 = document.createElement("td");
            price1.className = "price";
            price1.textContent = item1.price;
            tr.appendChild(td1);
            tr.appendChild(price1);
          }
  
          // 2nd col: Menu item (if exists)
          const item2 = menuTable.rows[i + 1];
          if (item2) {
            const td2 = document.createElement("td");
            td2.className = "title";
            td2.innerHTML = `
              ${item2.title}
              <span class="description">${item2.description}</span>
            `;
            const price2 = document.createElement("td");
            price2.className = "price";
            price2.textContent = item2.price;
            tr.appendChild(td2);
            tr.appendChild(price2);
          }
  
          table.appendChild(tr);
        }
      }
  
      container.appendChild(table);
      document.getElementById('content').appendChild(container);
    });
  }

export default renderMenuPage