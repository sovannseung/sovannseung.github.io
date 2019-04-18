<%@ page isELIgnored="false" %>

<html>
<body>
<h2>The number Quiz</h2>
<p> Your current score is ${currentScore}</p>
<p> Guess the next number in the sequence. </p>
<p> ${currentQuestion} </p>

<form method="post" action="PlayMVC">
    <label>
        Your answer:
        <input type="text" name="answer"/>
    </label> <br/>
    <input type="submit" value="Submit"/>
</form>
</body>
</html>
