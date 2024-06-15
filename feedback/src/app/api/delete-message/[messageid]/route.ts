
import { getServerSession } from 'next-auth/next';
import { User } from 'next-auth';
import { NextRequest } from 'next/server';
import dbconnect from '../../../../../lib/dbconnect';
import { authoptions } from '../../auth/[...nextauth]/option';
import UserModel from '@/model/user.model';

export async function DELETE(
  request: Request,
  { params }: { params: { messageid: string } }
) {
  const messageId = params.messageid;
  await dbconnect();
  const session = await getServerSession(authoptions);
  const _user: User = session?.user;
  if (!session || !_user) {
    return Response.json(
      { success: false, message: 'Not authenticated' },
      { status: 401 }
    );
  }

  try {
    const updateResult = await UserModel.updateOne(
      { _id: _user._id },
      { $pull: { messages: { _id: messageId } } }
    );

    if (updateResult.modifiedCount === 0) {
      return Response.json(
        { message: 'Message not found or already deleted', success: false },
        { status: 404 }
      );
    }

    return Response.json(
      { message: 'Message deleted', success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting message:', error);
    return Response.json(
      { message: 'Error deleting message', success: false },
      { status: 500 }
    );
  }
}