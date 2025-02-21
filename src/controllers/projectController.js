const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all projects
exports.getAllProjects = async (req, res) => {
  const projects = await prisma.project.findMany();
  res.json(projects);
};

// Get project by ID
exports.getProjectById = async (req, res) => {
  const { id } = req.params;
  const project = await prisma.project.findUnique({ where: { id } });
  if (!project) return res.status(404).json({ error: "Project not found" });
  res.json(project);
};

// Create a new project
exports.createProject = async (req, res) => {
  const { id, name, description, startDate, endDate, manager } = req.body;

  try {
    const project = await prisma.project.create({
      data: {
        id,
        name,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        manager,
      },
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Update project
exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, description, startDate, endDate, manager } = req.body;

  try {
    const updatedProject = await prisma.project.update({
      where: { id },
      data: {
        name,
        description,
        startDate: startDate ? new Date(startDate) : undefined, 
        endDate: endDate ? new Date(endDate) : undefined, 
        manager,
      },
    });

    res.json(updatedProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Delete project
exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  await prisma.project.delete({ where: { id } });
  res.status(204).send();
};

// Toggle favorite status
exports.toggleFavorite = async (req, res) => {
  const { id } = req.params;
  const project = await prisma.project.findUnique({ where: { id } });
  if (!project) return res.status(404).json({ error: "Project not found" });

  const updatedProject = await prisma.project.update({
    where: { id },
    data: { isFavorite: !project.isFavorite },
  });

  res.json(updatedProject);
};
