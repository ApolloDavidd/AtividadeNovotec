import java.util.Scanner;

public class Main {
    public static void main (String[] args){

        Scanner sc = new Scanner(System.in);
        double n1;
        double n2;
        Integer res;

        aluno aluno1 = new aluno (1, "Pedrinho", "3º Ensino Médio", 18);

        System.out.println("Insira o 1º numero");
        n1 = sc.nextDouble();

        System.out.println("Insira o 2º numero");
        n2 = sc.nextDouble();
        System.out.println("Escolhe: 1-soma, 2-subtração, 3-multiplicação, 4-divisão");
        res = sc.nextInt();

        if (res = 1) {
            aluno.somar((double)n1, (double)n2);
    }
}