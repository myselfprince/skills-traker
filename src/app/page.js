// 'use client'; // Enable client-side rendering for interactivity

// import { useState, useEffect } from 'react';
// import Item from '@/components/Item';

// export default function Home() {
//   // Initial data for each section
//   const initialSkills = [
//   ];

//   const initialProjects = [
//   ];

//   const initialInterviews = [
//   ];

//   const initialExtras = [
//   ];

//   // State for each section
//   const [skills, setSkills] = useState(initialSkills);
//   const [projects, setProjects] = useState(initialProjects);
//   const [interviews, setInterviews] = useState(initialInterviews);
//   const [extras, setExtras] = useState(initialExtras);

//   // State for input fields
//   const [skillInput, setSkillInput] = useState({ name: '', link: '' });
//   const [projectInput, setProjectInput] = useState({ name: '', link: '' });
//   const [interviewInput, setInterviewInput] = useState({ name: '', link: '' });
//   const [extraInput, setExtraInput] = useState({ name: '', link: '' });

//   // Load data from localStorage on mount
//   useEffect(() => {
//     const savedSkills = localStorage.getItem('skills');
//     const savedProjects = localStorage.getItem('projects');
//     const savedInterviews = localStorage.getItem('interviews');
//     const savedExtras = localStorage.getItem('extras');

//     if (savedSkills) setSkills(JSON.parse(savedSkills));
//     if (savedProjects) setProjects(JSON.parse(savedProjects));
//     if (savedInterviews) setInterviews(JSON.parse(savedInterviews));
//     if (savedExtras) setExtras(JSON.parse(savedExtras));
//   }, []);

//   // Save data to localStorage whenever the lists change
//   useEffect(() => {
//     localStorage.setItem('skills', JSON.stringify(skills));
//     localStorage.setItem('projects', JSON.stringify(projects));
//     localStorage.setItem('interviews', JSON.stringify(interviews));
//     localStorage.setItem('extras', JSON.stringify(extras));
//   }, [skills, projects, interviews, extras]);

//   // Function to add an item to a list
//   const addItem = (list, setList, input, setInput) => {
//     if (input.name.trim()) {
//       setList([...list, { name: input.name, link: input.link || '', completed: false }]);
//       setInput({ name: '', link: '' }); // Clear input fields
//     }
//   };

//   // Function to toggle completion
//   const toggleComplete = (list, setList, index) => {
//     const updatedList = [...list];
//     updatedList[index].completed = !updatedList[index].completed;
//     updatedList.sort((a, b) => a.completed - b.completed); // Sort: incomplete first
//     setList(updatedList);
//   };

//   // Function to delete an item
//   const deleteItem = (list, setList, index) => {
//     const updatedList = list.filter((_, i) => i !== index);
//     setList(updatedList);
//   };

//   return (
//     <main className="min-h-screen bg-black text-white p-8">
//       <div className="flex gap-6">
//         {/* Coding Skills */}
//         <div className="coding-skills w-1/4 border-2 border-gray-600 p-4 rounded-lg">
//           <h3 className="text-xl font-bold mb-4">Coding Skills</h3>
//           <div className="flex flex-col gap-2 mb-4">
//             <input
//               type="text"
//               placeholder="Skill Name"
//               value={skillInput.name}
//               onChange={(e) => setSkillInput({ ...skillInput, name: e.target.value })}
//               className="p-2 rounded text-white border"
//             />
//             <input
//               type="text"
//               placeholder="Link"
//               value={skillInput.link}
//               onChange={(e) => setSkillInput({ ...skillInput, link: e.target.value })}
//               className="p-2 rounded text-white border"
//             />
//             <button
//               onClick={() => addItem(skills, setSkills, skillInput, setSkillInput)}
//               className="bg-blue-600 hover:bg-blue-700 p-2 rounded"
//             >
//               Add Skill
//             </button>
//           </div>
//           <div className="flex flex-col gap-2">
//             {skills.map((item, index) => (
//               <Item
//                 key={index}
//                 title={item.name}
//                 link_url={item.link}
//                 completed={item.completed}
//                 onToggle={() => toggleComplete(skills, setSkills, index)}
//                 onDelete={() => deleteItem(skills, setSkills, index)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* NextJs Projects */}
//         <div className="nextjs-projects w-1/4 border-2 border-gray-300 p-4 rounded-lg">
//           <h2 className="text-xl font-bold mb-4">NextJs Projects</h2>
//           <div className="flex flex-col gap-2 mb-4">
//             <input
//               type="text"
//               placeholder="Project Name"
//               value={projectInput.name}
//               onChange={(e) => setProjectInput({ ...projectInput, name: e.target.value })}
//               className="p-2 rounded text-white border border"
//             />
//             <input
//               type="text"
//               placeholder="Link"
//               value={projectInput.link}
//               onChange={(e) => setProjectInput({ ...projectInput, link: e.target.value })}
//               className="p-2 rounded text-white border"
//             />
//             <button
//               onClick={() => addItem(projects, setProjects, projectInput, setProjectInput)}
//               className="bg-blue-600 hover:bg-blue-700 p-2 rounded"
//             >
//               Add Project
//             </button>
//           </div>
//           <div className="flex flex-col gap-2">
//             {projects.map((item, index) => (
//               <Item
//                 key={index}
//                 title={item.name}
//                 link_url={item.link}
//                 completed={item.completed}
//                 onToggle={() => toggleComplete(projects, setProjects, index)}
//                 onDelete={() => deleteItem(projects, setProjects, index)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Interview Series */}
//         <div className="interview-series w-1/4 border-2 border-gray-600 p-4 rounded-lg">
//           <h2 className="text-xl font-bold mb-4">Interview Series</h2>
//           <div className="flex flex-col gap-2 mb-4">
//             <input
//               type="text"
//               placeholder="Interview Name"
//               value={interviewInput.name}
//               onChange={(e) => setInterviewInput({ ...interviewInput, name: e.target.value })}
//               className="p-2 rounded text-white border"
//             />
//             <input
//               type="text"
//               placeholder="Link"
//               value={interviewInput.link}
//               onChange={(e) => setInterviewInput({ ...interviewInput, link: e.target.value })}
//               className="p-2 rounded text-white border"
//             />
//             <button
//               onClick={() => addItem(interviews, setInterviews, interviewInput, setInterviewInput)}
//               className="bg-blue-600 hover:bg-blue-700 p-2 rounded"
//             >
//               Add Interview
//             </button>
//           </div>
//           <div className="flex flex-col gap-2">
//             {interviews.map((item, index) => (
//               <Item
//                 key={index}
//                 title={item.name}
//                 link_url={item.link}
//                 completed={item.completed}
//                 onToggle={() => toggleComplete(interviews, setInterviews, index)}
//                 onDelete={() => deleteItem(interviews, setInterviews, index)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Extras and OneShots */}
//         <div className="extras-oneshots w-1/4 border-2 border-gray-600 p-4 rounded-lg">
//           <h2 className="text-xl font-bold mb-4">Extras and OneShots</h2>
//           <div className="flex flex-col gap-2 mb-4">
//             <input
//               type="text"
//               placeholder="Extra Name"
//               value={extraInput.name}
//               onChange={(e) => setExtraInput({ ...extraInput, name: e.target.value })}
//               className="p-2 rounded text-white border"
//             />
//             <input
//               type="text"
//               placeholder="Link"
//               value={extraInput.link}
//               onChange={(e) => setExtraInput({ ...extraInput, link: e.target.value })}
//               className="p-2 rounded text-white border"
//             />
//             <button
//               onClick={() => addItem(extras, setExtras, extraInput, setExtraInput)}
//               className="bg-blue-600 hover:bg-blue-700 p-2 rounded"
//             >
//               Add Extra
//             </button>
//           </div>
//           <div className="flex flex-col gap-2">
//             {extras.map((item, index) => (
//               <Item
//                 key={index}
//                 title={item.name}
//                 link_url={item.link}
//                 completed={item.completed}
//                 onToggle={() => toggleComplete(extras, setExtras, index)}
//                 onDelete={() => deleteItem(extras, setExtras, index)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

'use client'; // Enable client-side rendering for interactivity

import { useState, useEffect } from 'react';
import Item from '@/components/Item';

export default function Home() {
  // Initial data for each section (empty as per your request)
  const initialSkills = [];
  const initialProjects = [];
  const initialInterviews = [];
  const initialExtras = [];

  // State for each section
  const [skills, setSkills] = useState(initialSkills);
  const [projects, setProjects] = useState(initialProjects);
  const [interviews, setInterviews] = useState(initialInterviews);
  const [extras, setExtras] = useState(initialExtras);

  // State for input fields
  const [skillInput, setSkillInput] = useState({ name: '', link: '' });
  const [projectInput, setProjectInput] = useState({ name: '', link: '' });
  const [interviewInput, setInterviewInput] = useState({ name: '', link: '' });
  const [extraInput, setExtraInput] = useState({ name: '', link: '' });

  // Load data from localStorage on mount
  useEffect(() => {
    const savedSkills = localStorage.getItem('skills');
    const savedProjects = localStorage.getItem('projects');
    const savedInterviews = localStorage.getItem('interviews');
    const savedExtras = localStorage.getItem('extras');

    if (savedSkills) setSkills(JSON.parse(savedSkills));
    if (savedProjects) setProjects(JSON.parse(savedProjects));
    if (savedInterviews) setInterviews(JSON.parse(savedInterviews));
    if (savedExtras) setExtras(JSON.parse(savedExtras));
  }, []);

  // Save data to localStorage whenever the lists change
  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skills));
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('interviews', JSON.stringify(interviews));
    localStorage.setItem('extras', JSON.stringify(extras));
  }, [skills, projects, interviews, extras]);

  // Function to add an item to a list
  const addItem = (list, setList, input, setInput) => {
    if (input.name.trim()) {
      setList([...list, { name: input.name, link: input.link || '', completed: false }]);
      setInput({ name: '', link: '' }); // Clear input fields
    }
  };

  // Function to toggle completion
  const toggleComplete = (list, setList, index) => {
    const updatedList = [...list];
    updatedList[index].completed = !updatedList[index].completed;
    // Sort only if completed status changes, but preserve manual order otherwise
    if (updatedList[index].completed) {
      updatedList.sort((a, b) => a.completed - b.completed);
    }
    setList(updatedList);
  };

  // Function to delete an item
  const deleteItem = (list, setList, index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  // Handle drag start
  const handleDragStart = (e, index, listName) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ index, listName }));
    e.dataTransfer.effectAllowed = 'move';
  };

  // Handle drag over
  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  // Handle drop
  const handleDrop = (e, dropIndex, list, setList, listName) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    const { index: dragIndex, listName: dragListName } = data;

    // Only reorder if the item is dropped in the same list
    if (dragListName !== listName) return;

    const updatedList = Array.from(list);
    const [movedItem] = updatedList.splice(dragIndex, 1);
    updatedList.splice(dropIndex, 0, movedItem);

    // Ensure completed items stay at the bottom
    const incompleteItems = updatedList.filter((item) => !item.completed);
    const completedItems = updatedList.filter((item) => item.completed);
    setList([...incompleteItems, ...completedItems]);
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="flex gap-6">
        {/* Coding Skills */}
        <div className="coding-skills w-1/4 border-2 border-gray-600 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Coding Skills</h3>
          <div className="flex flex-col gap-2 mb-4">
            <input
              type="text"
              placeholder="Skill Name"
              value={skillInput.name}
              onChange={(e) => setSkillInput({ ...skillInput, name: e.target.value })}
              className="p-2 rounded text-white border bg-gray-800"
            />
            <input
              type="text"
              placeholder="Link"
              value={skillInput.link}
              onChange={(e) => setSkillInput({ ...skillInput, link: e.target.value })}
              className="p-2 rounded text-white border bg-gray-800"
            />
            <button
              onClick={() => addItem(skills, setSkills, skillInput, setSkillInput)}
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded"
            >
              Add Skill
            </button>
          </div>
          <div
            className="flex flex-col gap-2"
            onDragOver={(e) => e.preventDefault()} // Allow dropping on the container
          >
            {skills.map((item, index) => (
              <Item
                key={index}
                index={index}
                title={item.name}
                link_url={item.link}
                completed={item.completed}
                onToggle={() => toggleComplete(skills, setSkills, index)}
                onDelete={() => deleteItem(skills, setSkills, index)}
                onDragStart={(e) => handleDragStart(e, index, 'skills')}
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={(e) => handleDrop(e, index, skills, setSkills, 'skills')}
              />
            ))}
          </div>
        </div>

        {/* NextJs Projects */}
        <div className="nextjs-projects w-1/4 border-2 border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">NextJs Projects</h2>
          <div className="flex flex-col gap-2 mb-4">
            <input
              type="text"
              placeholder="Project Name"
              value={projectInput.name}
              onChange={(e) => setProjectInput({ ...projectInput, name: e.target.value })}
              className="p-2 rounded text-white border bg-gray-800"
            />
            <input
              type="text"
              placeholder="Link"
              value={projectInput.link}
              onChange={(e) => setProjectInput({ ...projectInput, link: e.target.value })}
              className="p-2 rounded text-white border bg-gray-800"
            />
            <button
              onClick={() => addItem(projects, setProjects, projectInput, setProjectInput)}
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded"
            >
              Add Project
            </button>
          </div>
          <div
            className="flex flex-col gap-2"
            onDragOver={(e) => e.preventDefault()}
          >
            {projects.map((item, index) => (
              <Item
                key={index}
                index={index}
                title={item.name}
                link_url={item.link}
                completed={item.completed}
                onToggle={() => toggleComplete(projects, setProjects, index)}
                onDelete={() => deleteItem(projects, setProjects, index)}
                onDragStart={(e) => handleDragStart(e, index, 'projects')}
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={(e) => handleDrop(e, index, projects, setProjects, 'projects')}
              />
            ))}
          </div>
        </div>

        {/* Interview Series */}
        <div className="interview-series w-1/4 border-2 border-gray-600 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Interview Series</h2>
          <div className="flex flex-col gap-2 mb-4">
            <input
              type="text"
              placeholder="Interview Name"
              value={interviewInput.name}
              onChange={(e) => setInterviewInput({ ...interviewInput, name: e.target.value })}
              className="p-2 rounded text-white border bg-gray-800"
            />
            <input
              type="text"
              placeholder="Link"
              value={interviewInput.link}
              onChange={(e) => setInterviewInput({ ...interviewInput, link: e.target.value })}
              className="p-2 rounded text-white border bg-gray-800"
            />
            <button
              onClick={() => addItem(interviews, setInterviews, interviewInput, setInterviewInput)}
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded"
            >
              Add Interview
            </button>
          </div>
          <div
            className="flex flex-col gap-2"
            onDragOver={(e) => e.preventDefault()}
          >
            {interviews.map((item, index) => (
              <Item
                key={index}
                index={index}
                title={item.name}
                link_url={item.link}
                completed={item.completed}
                onToggle={() => toggleComplete(interviews, setInterviews, index)}
                onDelete={() => deleteItem(interviews, setInterviews, index)}
                onDragStart={(e) => handleDragStart(e, index, 'interviews')}
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={(e) => handleDrop(e, index, interviews, setInterviews, 'interviews')}
              />
            ))}
          </div>
        </div>

        {/* Extras and OneShots */}
        <div className="extras-oneshots w-1/4 border-2 border-gray-600 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Extras and OneShots</h2>
          <div className="flex flex-col gap-2 mb-4">
            <input
              type="text"
              placeholder="Extra Name"
              value={extraInput.name}
              onChange={(e) => setExtraInput({ ...extraInput, name: e.target.value })}
              className="p-2 rounded text-white border bg-gray-800"
            />
            <input
              type="text"
              placeholder="Link"
              value={extraInput.link}
              onChange={(e) => setExtraInput({ ...extraInput, link: e.target.value })}
              className="p-2 rounded text-white border bg-gray-800"
            />
            <button
              onClick={() => addItem(extras, setExtras, extraInput, setExtraInput)}
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded"
            >
              Add Extra
            </button>
          </div>
          <div
            className="flex flex-col gap-2"
            onDragOver={(e) => e.preventDefault()}
          >
            {extras.map((item, index) => (
              <Item
                key={index}
                index={index}
                title={item.name}
                link_url={item.link}
                completed={item.completed}
                onToggle={() => toggleComplete(extras, setExtras, index)}
                onDelete={() => deleteItem(extras, setExtras, index)}
                onDragStart={(e) => handleDragStart(e, index, 'extras')}
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={(e) => handleDrop(e, index, extras, setExtras, 'extras')}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}