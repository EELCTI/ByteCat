export class navbar extends HTMLElement {
    constructor(){
        super();
        }

    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-light navbar" style="">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="assets/img/bytecat_logo_512.png" alt="Logo do grupo byte cat" width="40" height="40" class="d-inline-block align-text-top">
                        Grupo Byte<b>Cat</b>
                    </a>
                    <div class="navbar-nav gap-5 d-flex flex-row">
                        <a class="nav-link" href="#">Sobre nós</a>
                        <a class="nav-link" href="#">Redes Sociais</a>
                        <a class="nav-link" href="#">Integrantes</a>
                    </div>
                </div>
            </nav>
        `;
    }
}