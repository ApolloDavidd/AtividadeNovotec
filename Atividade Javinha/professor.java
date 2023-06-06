public class professor {

    private Integer id;

    private String nome;

    private String materia;

    private Double preço;

    public professor (Integer id, String nome, String materia, Double preço) {
        this.id = id;
        this.nome = nome;
        this.materia = materia;
        this.preço = preço;
    }

    public void calcular(Integer numero1, Integer numero2){
        Integer resultado = numero1 + numero2;
        System.out.println("so bora");
        System.out.println(resultado);
    }
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getMateria() {
        return materia;
    }

    public void setMateria(String materia) {
        this.materia = materia;
    }

    public Double getPreço() {
        return preço;
    }

    public void setPreço(Double preço) {
        this.preço = preço;
    }
}

