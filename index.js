'use strict'

function trocarTema() {
    const variaveisCss = document.documentElement

    const temaAtual = getComputedStyle(variaveisCss).getPropertyValue('--color-back')

    if (temaAtual == '#e6e6e6') {

        document.documentElement.style.setProperty(
            "--color-primaria",
            "#e6316d",
        )
        document.documentElement.style.setProperty(
            "--color-back",
            "#242424"
        )
        document.documentElement.style.setProperty(
            "--color-text-default",
            "#fff"
        )
        document.documentElement.style.setProperty(
            "--color-secundaria",
            "#5e4343df"
        )
    } else {
        document.documentElement.style.setProperty(
            "--color-primaria",
            "#1F6FEB",
        )
        document.documentElement.style.setProperty(
            "--color-back",
            "#e6e6e6"
        )
        document.documentElement.style.setProperty(
            "--color-text-default",
            "#000"
        )
        document.documentElement.style.setProperty(
            "--color-secundaria",
            "#a5c4f0"
        )
    }
}


