import { useState } from "react";
import { Box, Card, CardActionArea, CardContent, Typography, Dialog, DialogTitle, DialogContent, Button, Grid } from "@mui/material";

// Example skill data
const skills = [
  { id: 0, title: "Push Up", level: 1, goal: "Start here", timelimit: "1h", xp: 100, children: [1, 2] },
  { id: 1, title: "Pike Push Up", level: 2, goal: "Branch A", timelimit: "2h", xp: 200, children: [] },
  { id: 2, title: "Archer Push Up", level: 2, goal: "Branch B", timelimit: "2h", xp: 200, children: [] },
];

export const SkillTree = () => {
  const [selected, setSelected] = useState<any | null>(null);

  return (
    <Box sx={{ p: 4 }}>
      {/* Root */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <SkillCard skill={skills[0]} onClick={setSelected} />
      </Box>

      {/* Children (simple horizontal row for now) */}
      <Grid container spacing={4} justifyContent="center">
        {skills.slice(1).map((skill) => (
          <Grid item key={skill.id}>
            <SkillCard skill={skill} onClick={setSelected} />
          </Grid>
        ))}
      </Grid>

      {/* Popup Dialog */}
      <Dialog open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <>
            <DialogTitle>{selected.title} (Lvl {selected.level})</DialogTitle>
            <DialogContent>
              <Typography variant="body1" gutterBottom>
                Goal: {selected.goal}
              </Typography>
              <Typography variant="body2">Time: {selected.timelimit}</Typography>
              <Typography variant="body2">XP: {selected.xp}</Typography>
              <Box mt={2} textAlign="right">
                <Button onClick={() => setSelected(null)}>Close</Button>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

const SkillCard = ({ skill, onClick }: { skill: any; onClick: (s: any) => void }) => (
  <Card sx={{ minWidth: 160, textAlign: "center", boxShadow: 4, borderRadius: 2 }}>
    <CardActionArea onClick={() => onClick(skill)}>
      <CardContent>
        <Typography variant="h6">{skill.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          Lvl {skill.level}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
