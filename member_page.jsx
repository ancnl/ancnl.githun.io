import React from "react";

const members = [
  { name: "King Vorpard", role: "LEADER" },
  { name: "Xan Vorpard", role: "LEADER" },
  { name: "Jaylyn Vorpard" },
  { name: "Tyler Vorpard" },
  { name: "Delta Vorpard" },
  { name: "Sayhigh Vorpard" },
  { name: "Sunfo Vorpard" },
  { name: "BoonRod Vorpard" },
  { name: "Hopper Vorpard" },
  { name: "Chanom Vorpard" },
  { name: "Edward Vorpard" },
  { name: "Jtwo Various" },
  { name: "Jinny Ren" },
  { name: "Garious" },
  { name: "Arthur Vert" },
  { name: "Twin Vert" },
  { name: "Wan Senternal" },
  { name: "Cxtes Kennethsy" },
  { name: "Txrbo Ren" },
  { name: "Skrt" },
  { name: "Atom False" },
  { name: "Jay Chalet" },
  { name: "Jxydenx" },
  { name: "Cooper Sloth" },
  { name: "Comet Din Halley" },
  { name: "Hannibal Divinity" },
  { name: "Whitex Ren" },
  { name: "Makure Myths" },
  { name: "Hobbs Vorpard" },
  { name: "Lays Vorpard" },
  { name: "Joke Vorpard" },
  { name: "Scott Vorpard" },
  { name: "Sewie McCarthy" },
  { name: "Nongploy khonsuay" },
];

export default function MemberPage() {
  return (
    <div className="page">
      <div className="container">
        <div className="header">
          <h1 className="title">VORPARD</h1>
          <h2 className="subtitle">WE ARE STARDENG</h2>
        </div>

        <div className="grid">
          {members.map((member, index) => (
            <div className="card" key={index}>
              <span className="number">{index + 1}</span>
              <span className="name">
                {member.name} {member.role && <span className="role">{member.role}</span>}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .page {
          background: #0a0a0a;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          font-family: Tahoma, Arial, sans-serif;
        }

        .container {
          background: linear-gradient(160deg, #111111, #000000);
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 0 60px rgba(0, 0, 0, 0.8);
          max-width: 900px;
          width: 100%;
        }

        .header {
          text-align: center;
          margin-bottom: 40px;
        }

        .title {
          color: #ffffff;
          letter-spacing: 6px;
          font-weight: 900;
          font-size: 28px;
          text-transform: uppercase;
          font-family: 'Orbitron', sans-serif;
          margin: 0;
        }

        .subtitle {
          color: #ffffff;
          font-weight: 700;
          font-size: 20px;
          letter-spacing: 4px;
          margin: 0;
          margin-top: 10px;
          font-family: 'Orbitron', sans-serif;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 18px;
        }

        .card {
          background: #1a1a1a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 18px 16px;
          border-radius: 16px;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .card:hover {
          transform: scale(1.05);
          background: #2a2a2a;
          border: 1px solid #ffffff;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3),
                      inset 0 0 15px rgba(255, 255, 255, 0.1);
        }

        .card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.05), transparent);
          opacity: 0;
          transition: 0.4s;
        }

        .card:hover::before {
          opacity: 1;
        }

        .number {
          color: #ffffff;
          font-weight: bold;
          font-size: 14px;
          min-width: 28px;
        }

        .name {
          font-size: 15px;
          letter-spacing: 1.5px;
        }

        .role {
          color: #ff4d4d;
          font-weight: bold;
          font-size: 12px;
          margin-left: 6px;
        }
      `}</style>
    </div>
  );
}
