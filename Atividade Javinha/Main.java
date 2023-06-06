import java.util.Scanner;
class Main {
    public static void main (String [] args){
        Scanner sc = new Scanner (System.in);
        double salariohoras =0.0;
        double qtdhoras = 0.0;
        String professor ="";
        String materia= "";

        System.out.println("Nome do professor: ");
        professor = sc.next();

        System.out.println("Insira a matéria do professor");
        materia = sc.next();

        System.out.println("Quantas horas?");
        qtdhoras = sc.nextDouble();

        System.out.println("Quanto e salário por horas?");
        salariohoras = sc.nextDouble();
        sc.close();

         var Apollo = salariohoras * qtdhoras;
        System.out.println("O professor " + professor + " dará a matéria " + materia + "por " + qtdhoras +
                " horas e terá o salário de " + Apollo + " reais");
    }
}