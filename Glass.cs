/* ===========================
   VIRAT BROWSER X
   GLASS UI
===========================*/

:root{
--glass:rgba(255,255,255,.08);
--glass2:rgba(255,255,255,.15);
--border:rgba(255,255,255,.18);
--blur:18px;
--radius:22px;

--blue:#00c6ff;
--purple:#7b2ff7;
--pink:#ff4ecd;
--green:#00ff99;
}

body{

background:
linear-gradient(135deg,#08111f,#111827,#151d36,#071c2f);

background-size:400% 400%;

animation:bgMove 18s infinite alternate;

}

/* Glass Effect */

.glass{

background:var(--glass);

backdrop-filter:blur(var(--blur));

-webkit-backdrop-filter:blur(var(--blur));

border:1px solid var(--border);

border-radius:var(--radius);

box-shadow:

0 10px 35px rgba(0,0,0,.30),

0 0 25px rgba(0,198,255,.18);

}

/* Premium Button */

.glass-btn{

background:linear-gradient(135deg,#00c6ff,#0072ff);

border:none;

color:white;

padding:12px 22px;

border-radius:50px;

font-size:16px;

cursor:pointer;

transition:.35s;

}

.glass-btn:hover{

transform:translateY(-5px) scale(1.05);

box-shadow:

0 0 25px #00c6ff,

0 0 45px #0072ff;

}

/* Card */

.premium-card{

padding:25px;

margin:20px 0;

border-radius:25px;

background:var(--glass);

backdrop-filter:blur(18px);

border:1px solid rgba(255,255,255,.15);

transition:.4s;

}

.premium-card:hover{

transform:translateY(-8px);

box-shadow:

0 0 35px rgba(0,198,255,.35);

}

/* Search */

.premium-search{

height:60px;

border-radius:60px;

padding:0 25px;

background:rgba(255,255,255,.09);

border:1px solid rgba(255,255,255,.15);

color:white;

outline:none;

width:100%;

font-size:18px;

}

.premium-search::placeholder{

color:#ddd;

}

/* Floating AI */

.ai-float{

position:fixed;

right:25px;

bottom:95px;

width:70px;

height:70px;

border-radius:50%;

background:linear-gradient(135deg,#7b2ff7,#00c6ff);

display:flex;

align-items:center;

justify-content:center;

font-size:28px;

color:white;

cursor:pointer;

box-shadow:

0 0 35px #00c6ff;

animation:float 3s infinite ease-in-out;

z-index:999;

}

/* Neon */

.neon{

color:white;

text-shadow:

0 0 8px #00c6ff,

0 0 18px #00c6ff,

0 0 35px #00c6ff;

}

/* Scrollbar */

::-webkit-scrollbar{

width:8px;

}

::-webkit-scrollbar-thumb{

background:#00c6ff;

border-radius:20px;

}

/* Animation */

@keyframes bgMove{

0%{

background-position:left top;

}

100%{

background-position:right bottom;

}

}

@keyframes float{

0%{

transform:translateY(0);

}

50%{

transform:translateY(-15px