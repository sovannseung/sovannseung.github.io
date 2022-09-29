import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/PlayMVC")
public class PlayMVC extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");

        String answer = request.getParameter("answer");

        HttpSession s = request.getSession();
        Quiz q = new Quiz();

        if(s.getAttribute("quiz") == null){
            s.setAttribute("quiz", q);
            q.currentQuiz = 0;
            q.currentScore = 0;
        }
        else{
            q = (Quiz) s.getAttribute("quiz");
        }
        s.setMaxInactiveInterval(60 * 60 * 24);

        if(q.answers[q.currentQuiz] == Integer.valueOf(answer)){ // correct answer
            q.currentScore +=1;
        }

        q.currentQuiz +=1;
        s.setAttribute("quiz", q); // just update

        request.setAttribute("currentScore", q.currentScore);

        if(q.currentQuiz < 5){
            request.setAttribute("currentQuestion", q.questions[q.currentQuiz]);
            RequestDispatcher rd = request.getRequestDispatcher("indexMVC.jsp");
            rd.forward(request, response);
        }
        else{
            RequestDispatcher rd = request.getRequestDispatcher("resultMVC.jsp");
            rd.forward(request, response);
        }
    }

}
