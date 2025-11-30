/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

interface StudentHeaderProps {
  title: string;
  backTo?: string; 
}

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
`;

const Name = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #0f172a;
`;

const Nick = styled.span`
  font-size: 13px;
  color: #64748b;
  word-break: break-word;
`;

const StudentHeader: React.FC<StudentHeaderProps> = ({ title }) => {
  const normalizedTitle = title.trim().toLowerCase();
  const hideUser = normalizedTitle === 'профиль';

  return (
    <header
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #e5e7eb',
        padding: '12px 20px',
        minHeight: 56, 
        boxSizing: 'border-box',
      }}
    >
      <h1 css={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#0f172a' }}>
        {title}
      </h1>

      {!hideUser && (
        <Right>
          <User>
            <Avatar
              src="https://i.pravatar.cc/60?img=5"
              alt="Аватар пользователя Диана Фильченко"
              width={36}
              height={36}
            />
            <Info>
              <Name>Диана Фильченко</Name>
              <Nick>@d_filchenko</Nick>
            </Info>
          </User>
        </Right>
      )}
    </header>
  );
};

export default StudentHeader;
