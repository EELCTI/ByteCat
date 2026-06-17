export class prod extends HTMLElement {
    constructor(){
            super();
        }

    connectedCallback() {
        let img = this.getAttribute('img');
        let titulo = this.getAttribute('inputTittle');
        let conteudo = this.innerHTML;
        this.innerHTML = `
            <div class="col">
                <div class="card shadow-sm">
                    <div class="card-body">
                    <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${img}"></img>
                        <p class="card-text text-dark">${conteudo}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button
                                    type="button"
                                    class="btn btn-sm btn-outline-secondary"
                                >
                                    View
                                </button>
                            </div>
                            <small class="text-body-secondary"></small>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}