// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function Cadastro() {

    let parametros = {
        Nome: $("#nome").val(),
        Email: $("#email").val(),
        Mensagem: $("#mensagem").val(),
    }

    $.post("/Home/Cadastrar", parametros)

        .done(function (data) {

            if (data.status == "OK") {
                $("#frm").after("<h3> Seu Cadastro foi Registrado com Sucesso! </h3>");
                $("#frm").hide();
            }
            else {
                $("#frm").after("<h3> Erro ao Cadastrar! Tente novamente mais tarde... </h3>");
                $("#frm").hide();
            }

        })

          .fail(function () {
            alert("Erro no servidor.");
        });


}

$(document).ready(function () {

    $("#frmCadastro").submit(function (e) {

        e.preventDefault();
        Cadastro();

    });
});
























































