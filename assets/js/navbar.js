export class navbar extends HTMLElement {
    constructor(){
        super();
        }

    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="assets/img/bytecat_logo_512.png" alt="Logo do grupo byte cat" width="40" height="40" class="d-inline-block align-text-top">
                        Grupo Byte<b>Cat</b>
                    </a>
                    <a>
                    
                    </a>
                    <a>
                    
                    </a>
                    <a>
                    
                    </a>
                </div>
            </nav>
        `;
    }
}