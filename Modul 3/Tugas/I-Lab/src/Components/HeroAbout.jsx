function HeroAbout() {
  return (
    <>
      <div class="container mt-20 pt-10 items-center justify-center justify-items-center justify-self-center">
        <h1 class="mb-4 text-4xl text-center font-extrabold tracking-tight leading-none text-backgroundAbout md:text-5xl lg:text-6xl">Welcome to Laboratorium Informatika UMM</h1>
        <p class="mb-8 text-lg text-center font-normal text-backgroundAbout lg:text-xl">
          i-Lab is an integrated system that can support practicum activities in the Department of Informatics at the University of Muhammadiyah Malang, both for practitioners, lecturers and assistants. i-Lab is the work of students of the University of Muhammadiyah Malang and has been around since 2012 and has gone through many changes since then.
        </p>

        <img
          src="/images/labit-removebg-preview.png"
          className="container max-w-screen-2xl bg-no-repeat rounded-2xl p-20 my-10 bg-backgroundAbout"
          alt=""
          style={{ height: "300px", width: "300px" }}
        />

        <div className="text-backgroundAbout">
          <ol>
            <li>
              <h4>1. Laboratorium Rekayasa Perangkat Lunak</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;Specializes in software feasibility analysis, design, quality assurance, and software re-engineering.</p>
            </li>
            <li>
              <h4>2. Laboratorium Sistem dan Keamanan Jaringan</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;Analyzes network issues, providing solutions through network system development, management, and security evaluation.</p>
            </li>
            <li>
              <h4>3. Laboratorium Game Cerdas</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;Engages in video game development, coordinating complex tasks such as character, level, puzzle, art, and animation design, focusing on game coding.
              </p>
            </li>
            <li>
              <h4>4. Laboratorium Sains Data</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;Focuses on data analysis and processing to generate valuable insights and knowledge. Includes data modeling and analysis for specific purposes.</p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default HeroAbout;
