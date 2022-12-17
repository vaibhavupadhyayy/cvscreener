console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Vaibhav Upadhyay',
        age: 20,
        city: 'Jhansi',
        language: 'Python, C, c++, Java, Javascript',
        framework: 'Django, Flask, Kotlin, React, Node js',
        image: 'vaibh.jpg'
    },

    {
        name: 'Shivani Singh',
        age: 19,
        city: 'Delhi',
        language: 'Javascript',
        framework: 'Express',
        image: 'one.jpg'
    },
    {
        name: 'Arpita Tiwari',
        age: 26,
        city: 'Gwalior',
        language: 'Python',
        framework: 'Flask',
        image: 'two.jpg'
    },
    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Mumbai',
        language: 'CSS',
        framework: 'Tailwind css, Tailbog',
        image: '7.jpg'
    },


    {
        name: 'Shivani Dubey',
        age: 22,
        city: 'Ayodhya',
        language: 'Java',
        framework: 'Kotlin',
        image: '06.jpg'
    },
    {
        name: 'Sohit',
        age: 42,
        city: 'Mountpur',
        language: 'Less',
        framework: 'Uikit',
        image: '00.jpg'
    },

    {
        name: 'Janhavi Mishra',
        age: 20,
        city: 'Azamgarh',
        language: 'Node.js',
        framework: 'Angular.js',
        image: '02.jpg'
    },

    {
        name: 'KL Rahul',
        age: 30,
        city: 'Mohali',
        language: 'Python',
        framework: 'Django',
        image: '6.jpg'
    },

    {
        name: 'Anurag Pandit',
        age: 29,
        city: 'Agra',
        language: 'C, C++',
        framework: 'React, Node',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },
    {
        name: 'Ansika Mishra',
        age: 28,
        city: 'Mirzapur',
        language: 'JHtml, Css',
        framework: 'Purl.css',
        image: '05.jpg'
    },

   
    {
        name: 'Pooja Trivedi',
        age: 24,
        city: 'Orai',
        language: 'Express js',
        framework: 'Vue.js',
        image: '04.jpg'
    },
    {
        name: 'Priyanka Dubey',
        age: 33,
        city: 'Gorakhpur',
        language: 'Java, C c++',
        framework: 'Kotlin',
        image: '06.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 55,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Priya Tiwari',
        age: 23,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: '07.jpg'
    },

    {
        name: 'Sakshi Rai',
        age: 35,
        city: 'Kanpur',
        language: 'HTML,CSS,',
        framework: 'Bootstarp',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Ritika Sharma',
        age: '25',
        city: 'Nagpur',
        language: 'Typescript',
        framework: 'Angular.js',
        image: '03.jpg'
    },

    {
        name: 'Rohit Singh',
        age: 50,
        city: 'Basti',
        language: 'Node.js',
        framework: 'Vue.js',
        image: "01.jpg"
    }
]


// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('End Of ALL Candidate Applications');
        window.location.reload();
    }

}
