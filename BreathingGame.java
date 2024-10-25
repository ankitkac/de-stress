import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class Main extends Application {

    @Override
    public void start(Stage primaryStage) {
        // Title and window size
        primaryStage.setTitle("Mind Relaxation Game");

        StackPane root = new StackPane();
        Scene scene = new Scene(root, 600, 400);

        // Start the breathing exercise button
        Button startGameButton = new Button("Start Breathing Exercise");
        startGameButton.setOnAction(e -> BreathingGame.showGame(primaryStage));
        root.getChildren().add(startGameButton);

        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
import javafx.animation.ScaleTransition;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;
import javafx.scene.shape.Circle;
import javafx.stage.Stage;
import javafx.util.Duration;

public class BreathingGame {
    public static void showGame(Stage primaryStage) {
        StackPane root = new StackPane();
        Scene scene = new Scene(root, 600, 400);

        // Create a circle that represents the breathing "in-out"
        Circle breathingCircle = new Circle(100);
        breathingCircle.setFill(Color.LIGHTBLUE);

        // Breathing instructions
        Label instructions = new Label("Breathe In... Breathe Out...");
        instructions.setStyle("-fx-font-size: 24; -fx-text-fill: #333;");

        root.getChildren().addAll(breathingCircle, instructions);

        // Breathing animation: scale circle in and out
        ScaleTransition scaleTransition = new ScaleTransition(Duration.seconds(4), breathingCircle);
        scaleTransition.setFromX(1);
        scaleTransition.setFromY(1);
        scaleTransition.setToX(2);
        scaleTransition.setToY(2);
        scaleTransition.setAutoReverse(true);
        scaleTransition.setCycleCount(ScaleTransition.INDEFINITE);
        scaleTransition.play();

        // Set the new scene
        primaryStage.setScene(scene);
        primaryStage.show();
    }
}

