<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>VORPARD Members</title>
<style>
  body {
    margin: 0;
    font-family: Tahoma, Arial, sans-serif;
    background: #0a0a0a;
    color: #fff;
  }
  .container {
    max-width: 900px;
    margin: auto;
    padding: 40px;
    background: linear-gradient(160deg, #111111, #000000);
    border-radius: 24px;
    box-shadow: 0 0 60px rgba(0,0,0,0.8);
  }
  .header {
    text-align: center;
    margin-bottom: 40px;
  }
  .header h1 {
    font-family: 'Orbitron', sans-serif;
    font-size: 28px;
    font-weight: 900;
    letter-spacing: 6px;
    margin: 0;
    color: #fff;
  }
  .header h2 {
    font-family: 'Orbitron', sans-serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 4px;
    margin-top: 10px;
    color: #fff;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 18px;
  }
  .card {
    background: #1a1a1a;
    border: 1px solid rgba(255,255,255,0.1);
    padding: 18px 16px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all 0.25s ease;
    cursor: pointer;
  }
  .card:hover {
    transform: scale(1.05);
    background: #2a2a2a;
    border: 1px solid #fff;
    box-shadow: 0 0 20px rgba(255,255,255,0.3), inset 0 0 15px rgba(255,255,255,0.1);
  }
  .number {
    font-weight: bold;
    min-width: 28px;
  }
  .role {
    color: #ff4d4d;
    font-weight: bold;
    font-size: 12px;
    margin-left: 6px;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>VORPARD</h1>
      <h2>WE ARE STARDENG</h2>
    </div>
    <div class="grid" id="memberGrid"></div>
  </div>

  <script>
    const members = [
      { name: "King Vorpard", role: "LEADER" },
      { name: "Xan Vorpard", role: "LEADER" },
      "Jaylyn Vorpard",
      "Tyler Vorpard",
      "Delta Vorpard",
      "Sayhigh Vorpard",
      "Sunfo Vorpard",
      "BoonRod Vorpard",
      "Hopper Vorpard",
      "Chanom Vorpard",
      "Edward Vorpard",
      "Jtwo Various",
      "Jinny Ren",
      "Garious",
      "Arthur Vert",
      "Twin Vert",
      "Wan Senternal",
      "Cxtes Kennethsy",
      "Txrbo Ren",
      "Skrt",
      "Atom False",
      "Jay Chalet",
      "Jxydenx",
      "Cooper Sloth",
      "Comet Din Halley",
      "Hannibal Divinity",
      "Whitex Ren",
      "Makure Myths",
      "Hobbs Vorpard",
      "Lays Vorpard",
      "Joke Vorpard",
      "Scott Vorpard",
      "Sewie McCarthy",
      "Nongploy khonsuay",
    ];

    const grid = document.getElementById("memberGrid");
    members.forEach((member, index) => {
      let name = typeof member === 'string' ? member : member.name;
      let role = typeof member === 'object' && member.role ? member.role : '';
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<span class="number">${index + 1}</span>
                        <span class="name">${name}${role ? ' <span class="role">'+role+'</span>' : ''}</span>`;
      grid.appendChild(card);
    });
  </script>
</body>
</html>
