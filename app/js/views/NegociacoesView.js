var Views;
(function (Views) {
    class NegociacoesView extends Views.View {
        template(model) {
            return `
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
        
                    <tbody>
                    </tbody>   
    
                    ${model.retornaArray().map(negociacao => `<tr>
                        <td>${negociacao.data.getUTCDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>                        
                    `).join('')}
                    
                    
                   <tfoot>
                    </tfoot>
                </table>               
                `;
        }
    }
    Views.NegociacoesView = NegociacoesView;
})(Views || (Views = {}));
