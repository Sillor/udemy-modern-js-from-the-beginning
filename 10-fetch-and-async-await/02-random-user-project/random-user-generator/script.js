const generateBtn = document.getElementById('generate');
const img = document.querySelector('#user img');
const userContainer = document.querySelector('#user');

function generate() {
    showSpinner();
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            hideSpinner();
            const userData = data.results[0];

            const user = {
                name: `${userData.name.first} ${userData.name.last}`,
                email: userData.email,
                phone: userData.phone,
                location: `${userData.location.city}, ${userData.location.country}`,
                age: userData.dob.age,
                gender: userData.gender,
                picture: userData.picture.large
            };

            applyData(user);
        });
}

// Fetching user data from API
function applyData(user) {
    if (user.gender === 'female')
        document.body.style.backgroundColor = 'rebeccapurple';
    else
        document.body.style.backgroundColor = 'steelblue';

    userContainer.innerHTML =
        `<div id="user" class="mt-6">
            <div class="flex justify-between">
                <div class="flex">
                    <img
                    class="w-48 h-48 rounded-full mr-8"
                    src="${user.picture}"
                    />
                    <div class="space-y-3">
                        <p class="text-xl">
                            <span class="font-bold">Name: </span>${user.name}
                        </p>
                        <p class="text-xl">
                            <span class="font-bold">Email: </span> ${user.email}
                        </p>
                        <p class="text-xl">
                            <span class="font-bold">Phone: </span> ${user.phone}
                        </p>
                        <p class="text-xl">
                            <span class="font-bold">Location: </span> ${user.location}
                        </p>
                        <p class="text-xl"><span class="font-bold">Age: </span> ${user.age}</p>
                    </div>
                </div>
            </div>
        </div>`
}

function showSpinner() {
    document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
    document.querySelector('.spinner').style.display = 'none';
}

// Event listeners
generateBtn.addEventListener('click', generate);

// Sample API fetch:
/*
{
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Joseph",
                "last": "Holt"
            },
            "location": {
                "street": {
                    "number": 9127,
                    "name": "Manor Road"
                },
                "city": "Loughrea",
                "state": "Fingal",
                "country": "Ireland",
                "postcode": 19851,
                "coordinates": {
                    "latitude": "-0.8385",
                    "longitude": "-80.8618"
                },
                "timezone": {
                    "offset": "+4:00",
                    "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
                }
            },
            "email": "joseph.holt@example.com",
            "login": {
                "uuid": "86ae6941-1942-43dd-bf08-a0c8af773865",
                "username": "angrylion709",
                "password": "vienna",
                "salt": "fJpkl1Yo",
                "md5": "44e762c97c260e911f3865e4016e6e4e",
                "sha1": "5fe64e512ff7c7ff0f5e4d0acc587ac746fd76be",
                "sha256": "68765749711c81f2e9d95cbdae393e01099f69c8c350b1703b92249b5c3b8739"
            },
            "dob": {
                "date": "1947-03-25T14:55:15.103Z",
                "age": 76
            },
            "registered": {
                "date": "2018-06-16T14:34:15.241Z",
                "age": 5
            },
            "phone": "051-944-2543",
            "cell": "081-317-5626",
            "id": {
                "name": "PPS",
                "value": "7330842T"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/55.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/55.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/55.jpg"
            },
            "nat": "IE"
        }
    ],
    "info": {
        "seed": "c7c890a13b5297c7",
        "results": 1,
        "page": 1,
        "version": "1.4"
    }
}
*/