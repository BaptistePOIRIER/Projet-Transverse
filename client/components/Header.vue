<template>
    <div class="header">
        <img src="./assets/Logo.png">
        <h1>L'algorithmique en un clique</h1>
        <nav>
            <router-link to='/contact'>Contact</router-link>
            <router-link to='/login'>Connexion</router-link>
        </nav>
    </div>
</template>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        background-color: white;
    }
    .header {
        position: sticky;
        top: 0px;

        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .header img {
        width: 150px;
        height: 100px;
        margin: auto;
    }
    .header h1 {
        margin: auto;
    }
    .header nav {
        margin: auto;
    }

    nav * {
            text-decoration: none;
            color: black;
            padding: 5px 20px;
            transition: 0.3s ease;
            border: 1px solid black
    }
        
    nav *:hover {
            color: white;
            background-color: black;
    }
</style>