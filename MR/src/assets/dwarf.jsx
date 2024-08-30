import javax.swing.*;
import java.awt.*;

public class DwarfMinerDrawing extends JPanel {

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        // Set background color
        setBackground(Color.DARK_GRAY);

        // Draw the head
        g.setColor(new Color(139, 69, 19)); // Brown for the skin
        g.fillOval(90, 50, 60, 60); // Face

        // Draw the helmet
        g.setColor(Color.GRAY);
        g.fillRect(85, 40, 70, 20); // Helmet
        g.setColor(Color.YELLOW);
        g.fillOval(110, 40, 20, 20); // Helmet light

        // Draw the beard
        g.setColor(new Color(102, 51, 0)); // Dark brown
        g.fillRect(100, 100, 40, 30); // Beard

        // Draw the body
        g.setColor(new Color(150, 75, 0)); // Leather color
        g.fillRect(85, 130, 70, 80); // Torso

        // Draw the arms
        g.setColor(new Color(139, 69, 19)); // Same as face color
        g.fillRect(60, 130, 25, 60); // Left arm
        g.fillRect(155, 130, 25, 60); // Right arm

        // Draw the pickaxe
        g.setColor(Color.GRAY);
        g.fillRect(40, 110, 80, 10); // Pickaxe handle
        g.fillRect(40, 100, 10, 30); // Pickaxe head

        // Draw the legs
        g.setColor(new Color(50, 50, 50)); // Dark gray for pants
        g.fillRect(85, 210, 30, 50); // Left leg
        g.fillRect(125, 210, 30, 50); // Right leg

        // Draw the boots
        g.setColor(Color.BLACK);
        g.fillRect(85, 260, 30, 10); // Left boot
        g.fillRect(125, 260, 30, 10); // Right boot
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame();
        DwarfMinerDrawing drawing = new DwarfMinerDrawing();
        frame.add(drawing);
        frame.setSize(240, 320);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
