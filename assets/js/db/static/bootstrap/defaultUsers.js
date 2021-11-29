const defaultUsers = [
    {
        "name": "Paciente Teste",
        "document": "62784472078",
        "role": "patient",
        "picture": null,
        "phone": "31999999999",
        "email": "paciente@teste.com",
        "password": "299fbb455c42239c86d2ee3b15403ed1b468259ecaedf0c3527451e1f0d63d59"
    },
    {
        "name": "Clínica Teste",
        "document": "02673036000161",
        "role": "clinic",
        "picture": null,
        "phone": "82999999999",
        "email": "clinica@teste.com",
        "password": "6fddde9bdad0d3b51946fdc5b8febda9f6772a518a235b5158a9367a20522bfe",
        "billing": {
            "planId": null,
            "zipcode": "30120010",
            "address": "Avenida dos Andradas",
            "addressNumber": 201,
            "addressComp": "",
            "neigh": "Centro",
            "city": "Belo Horizonte",
            "state": "MG"
        },
        "insuranceIds": [
            1, 2, 4, 7
        ]
    },
];

export default defaultUsers;
