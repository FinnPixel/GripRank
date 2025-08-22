import { Card, Grid } from "@mui/material";
import Park, { IPark } from "./Park";
import { SkillTree } from "./Tree";
interface IFirstSection {
  displayedParks: IPark[];
}

const data = [
  {
    id: 'inclined_push_up',
    title: 'Inclined Push Up',
    tooltip: {
      content:
        'This node is the top most level, and will be unlocked, and ready to be clicked.',
    },
    children: [
      {
        id: 'push_up',
        title: 'Push Up',
        tooltip: {
          content:
            'This is a parent of the top node, and will locked while the parent isn’t in a selected state.',
        },
        children: [
          {
            id: 'pike_push_up',
            title: 'Pike Push Up',
            tooltip: {
              content:
                'This is a parent of the top node, and will locked while the parent isn’t in a selected state.',
            },
            children: [],
          },
          {
            id: 'archer_push_up',
            title: 'Archer Push Up',
            tooltip: {
              content:
                'This is the child of ‘Hello World and the sibling of ‘Hello Sun’. Notice how the app takes care of the layout automatically? That’s why this is called Beautiful Skill Tree and not just ‘Skill Tree’. (Also the npm namespace had already been taken for the latter so (flick hair emoji).',
            },
            children: [],
          },
          {
            id: 'pseudo_push_up',
            title: 'Pseudo Push Up',
            tooltip: {
              content:
                'This is the child of ‘Hello World and the sibling of ‘Hello Sun’. Notice how the app takes care of the layout automatically? That’s why this is called Beautiful Skill Tree and not just ‘Skill Tree’. (Also the npm namespace had already been taken for the latter so (flick hair emoji).',
            },
            children: [],
          },
        ]
      }
    ],
  },
];

const FirstSection = ({ displayedParks }: IFirstSection) => {
  return (
    <Card
      sx={{
        p: { xs: 0, sm: 4 },
        pb: { xs: 2, sm: 4 },
        mx: { xs: 4, lg: 16 },
        mt: 4,
        borderRadius: 4,
        backgroundColor: "#222222",
        backdropFilter: "saturate(200%) blur(30px)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <SkillTree />
    </Card>
  );
};

export default FirstSection;
