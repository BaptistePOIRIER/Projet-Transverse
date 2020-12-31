
<template>
    <div class="container">
        <div class="button">
            <a href="Design.html#sec-1" class="btn">Acceuil</a>
        </div>
        <div class="row">
            <h1>Contacte nous</h1>
        </div>
        <div class="row">
            <h4 style="text-align:center">Propose nous des Algorithmes ou explique nous tes Problèmes!:)</h4>
        </div>
        <div class="row input-container">
            <div class="col-xs-12">
                <div class="styled-input wide">
                    <input type="text" required />
                    <label>Prénom ou Identifiant:</label>
                </div>
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="styled-input">
                    <input type="text" required />
                    <label>Email:</label>
                </div>
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="styled-input" style="float:right;">
                    <input type="text" required />
                    <label>Compte Instagram (si possible)</label>
                </div>
            </div>
            <div class="col-xs-12">
                <div class="styled-input wide">
                    <textarea required></textarea>
                    <label>Message:</label>
                </div>
            </div>
            <div class="col-xs-12">
                <div class="btn-lrg submit-btn">Envoie ton Message</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
  body {
            background-color: #444442;
            padding-top: 85px;
        }
        
        button:focus {
            outline: none;
        }
        
        .button {
            position: absolute;
            top: 10%;
            left: 50%;
            bottom: auto;
            transform: translate(-50%, 50%);
            display: inline-block;
        }
        
        .btn {
            border: 1px solid #fff;
            padding: 10px 30px;
            color: #fff;
            text-decoration: none;
            transition: 0.6s ease;
        }
        
        .btn:hover {
            background-color: rgb(255, 255, 255);
            color: rgb(0, 0, 0);
        }
        
        h1 {
            font-family: 'Poppins', sans-serif, 'arial';
            font-weight: 600;
            font-size: 72px;
            color: white;
            text-align: center;
        }
        
        h4 {
            font-family: 'Roboto', sans-serif, 'arial';
            font-weight: 400;
            font-size: 20px;
            color: #9b9b9b;
            line-height: 1.5;
        }
        
        input:focus~label,
        textarea:focus~label,
        input:valid~label,
        textarea:valid~label {
            font-size: 0.75em;
            color: #999;
            top: -5px;
            -webkit-transition: all 0.225s ease;
            transition: all 0.225s ease;
        }
        
        .styled-input {
            float: left;
            width: 293px;
            margin: 1rem 0;
            position: relative;
            border-radius: 4px;
        }
        
        @media only screen and (max-width: 768px) {
            .styled-input {
                width: 100%;
            }
        }
        
        .styled-input label {
            color: #999;
            padding: 1.3rem 30px 1rem 30px;
            position: absolute;
            top: 10px;
            left: 0;
            -webkit-transition: all 0.25s ease;
            transition: all 0.25s ease;
            pointer-events: none;
        }
        
        .styled-input.wide {
            width: 650px;
            max-width: 100%;
        }
        
        input,
        textarea {
            padding: 30px;
            border: 0;
            width: 100%;
            font-size: 1rem;
            background-color: #2d2d2d;
            color: white;
            border-radius: 4px;
        }
        
        input:focus,
        textarea:focus {
            outline: 0;
        }
        
        input:focus~span,
        textarea:focus~span {
            width: 100%;
            -webkit-transition: all 0.075s ease;
            transition: all 0.075s ease;
        }
        
        textarea {
            width: 100%;
            min-height: 15em;
        }
        
        .input-container {
            width: 650px;
            max-width: 100%;
            margin: 20px auto 25px auto;
        }
        
        .submit-btn {
            float: right;
            padding: 7px 35px;
            border-radius: 60px;
            display: inline-block;
            background-color: #4b8cfb;
            color: white;
            font-size: 18px;
            cursor: pointer;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06), 0 2px 10px 0 rgba(0, 0, 0, 0.07);
            -webkit-transition: all 300ms ease;
            transition: all 300ms ease;
        }
        
        .submit-btn:hover {
            transform: translateY(1px);
            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.10), 0 1px 1px 0 rgba(0, 0, 0, 0.09);
        }
        
        @media (max-width: 768px) {
            .submit-btn {
                width: 100%;
                float: none;
                text-align: center;
            }
        }
        
        input[type=checkbox]+label {
            color: #ccc;
            font-style: italic;
        }
        
        input[type=checkbox]:checked+label {
            color: #f00;
            font-style: normal;
        }
</style>