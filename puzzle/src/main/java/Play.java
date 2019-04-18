import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/Play")
public class Play extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out=response.getWriter();

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
            //q.currentQuiz +=1;
        }
        s.setMaxInactiveInterval(60 * 60 * 24);

        if(q.answers[q.currentQuiz] == Integer.valueOf(answer)){ // correct answer
            q.currentScore +=1;
        }

        q.currentQuiz +=1;
        s.setAttribute("quiz", q); // just update

        String result="";
        if(q.currentQuiz < 5){
            result="<h2>The number Quiz</h2>" +
                    "    <p> Your current score is " + q.currentScore + "</p>" +
                    "    <p> Guess the next number in the sequence. </p>" +
                    "    <p> " + q.questions[q.currentQuiz] + " </p>" +
                    "    <form method='post' action='Play'>" +
                    "        <label>" +
                    "            Your answer:" +
                    "            <input type='text' name='answer'/>" +
                    "        </label> <br/>" +
                    "        <input type='submit' value='Submit'/>" +
                    "    </form>";
        }
        else{
            result= "<h2>The number Quiz</h2>" +
                    "<p> Your current score is " + q.currentScore + ". </p>" +
                    "<p> You have completed the Number Quiz, with a score of " + q.currentScore + " out of 5. </p>";
        }

        out.println(result);
    }

}
