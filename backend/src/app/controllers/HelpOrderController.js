import * as Yup from 'yup';

import Student from '../models/Student';
import HelpOrder from '../models/HelpOrder';

class HelpOrderController {
  async index(req, res) {
    const student_id = req.params.studentId;

    const studentExists = await Student.findByPk(student_id);

    if (!studentExists) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const helpOrders = await HelpOrder.findAll({
      where: {
        student_id,
      },
      order: [['created_at', 'DESC']],
    });

    return res.json(helpOrders);
  }

  // async show(req, res) {
  //   const { id } = req.params;

  //   if (!id) {
  //     return res
  //       .status(400)
  //       .json({ error: 'Os dados inseridos não são valídos.' });
  //   }

  //   const helpOrders = await HelpOrder.findOne({
  //     where: { id },
  //     include: [
  //       {
  //         model: Student,
  //         as: 'student',
  //         attributes: ['name', 'email'],
  //       },
  //     ],
  //   });

  //   if (!helpOrders) {
  //     return res
  //       .status(404)
  //       .json({ error: 'O pedido de auxílio não foi encontrado.' });
  //   }

  //   return res.json(helpOrders);
  // }

  async store(req, res) {
    const schema = Yup.object().shape({
      question: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const student_id = req.params.studentId;
    const { question } = req.body;

    const studentExists = await Student.findByPk(student_id);

    if (!studentExists) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const helpOrder = await HelpOrder.create({
      student_id,
      question,
    });

    return res.json(helpOrder);
  }
}

export default new HelpOrderController();
