import java.util.Date;

public class aluno {

    private Integer id;

    private String nome;

    private String serie;

    private Integer idade;

    public aluno(Integer id, String nome, String serie, Integer idade) {
        this.id = id;
        this.nome = nome;
        this.serie = serie;
        this.idade = idade;
    }

    public void somar (double n1, double n2){

        double res = n1 + n2;
        System.out.println(res);
    }
    public void subtrair (double n1, double n2){

        double res = n1 - n2;
        System.out.println(res);
    }public void multiplicação (double n1, double n2){

        double res = n1 * n2;
        System.out.println(res);
    }public void divisão (double n1, double n2){

        double res = n1 / n2;
        System.out.println(res);
    }
}
